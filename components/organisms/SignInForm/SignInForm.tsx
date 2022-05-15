import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { TiSocialGithub, TiSocialTwitter } from 'react-icons/ti';
import { Button, Flex, FormControl, FormLabel, IconButton, Input, Text } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { FormInput } from '../../atoms/FormInput/FormInput';
import { useAppDispatch, useAppselector } from '../../../redux/hooks';
import { userSigninThunk } from '../../../redux/slice/authSlice';

type StateType = {
    email: string;
    password: string;
};

export const SignInForm = () => {
    const dispatch = useAppDispatch();
    const { status } = useAppselector((state) => state.auth);
    const router = useRouter();
    const [userInfo, setUserInfo] = useState<StateType>({} as StateType);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'email' || name === 'password') {
            setUserInfo((preState) => ({
                ...preState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(userSigninThunk(userInfo))
            .unwrap()
            .then((res) => {
                if (Object.keys(res).length) {
                    router.push('/');
                }
            });
    };

    return (
        <FormControl isRequired>
            <FormInput type='email' label='Email' name='email' placeholder='xyz@gmail.com' value={userInfo.email} onChange={handleChange} />
            <FormInput type='password' label='Password' name='password' placeholder='******' value={userInfo.password} onChange={handleChange} />
            <Button isLoading={status === 'pending'} type='submit' mt='4' onClick={handleSubmit}>
                Login
            </Button>
            {/* <Flex my='2' justifyContent='center' alignItems='center'>
                <IconButton aria-label='github login' icon={<TiSocialGithub />} mr='2' onClick={() => signIn('github')}></IconButton>
                <IconButton aria-label='Twitter login' icon={<TiSocialTwitter />} onClick={() => signIn('twitter')}></IconButton>
            </Flex> */}
            <Text textAlign='center' mt='2' color='blue.300'>
                <Link href='/signup'>
                    <a>Create account</a>
                </Link>
            </Text>
        </FormControl>
    );
};

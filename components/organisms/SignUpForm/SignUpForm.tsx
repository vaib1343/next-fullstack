import { Button, Flex, FormControl, FormLabel, IconButton, Input, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';
import { TiSocialGithub, TiSocialTwitter } from 'react-icons/ti';
import { useAppDispatch } from '../../../redux/hooks';
import { userSignupThunk } from '../../../redux/slice/authSlice';
import { FormInput } from '../../atoms/FormInput/FormInput';

type StateType = {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
};

export const SignUpForm = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [userInfo, setUserInfo] = useState<StateType>({} as StateType);

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(userSignupThunk(userInfo)).unwrap().then(res => {
            if(Object.keys(res).length){
                router.push('/')
            }
        })
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        if (name === 'firstName' || name === 'lastName' || name === 'password' || name === 'email') {
            userInfo[name] = value;
        }
    };

    return (
        <FormControl isRequired>
            <FormInput id='firstname' label='Firstname' placeholder='John' name='firstName' type='text' value={userInfo.firstName} onChange={handleChange} />
            <FormInput id='lastname' label='Lastname' placeholder='Soff' name='lastName' type='text' value={userInfo.lastName} onChange={handleChange} />
            <FormInput id='email' label='Email' placeholder='xyz@gmail.com' name='email' type='email' value={userInfo.email} onChange={handleChange} />
            <FormInput id='password' label='Password' placeholder='******' name='password' type='password' value={userInfo.password} onChange={handleChange} />
            <Button type='submit' mt='4' onClick={handleSubmit}>
                SignUp
            </Button>
            {/* <Flex my='2' justifyContent='center' alignItems='center'>
                <IconButton aria-label='github login' icon={<TiSocialGithub />} mr='2'></IconButton>
                <IconButton aria-label='Twitter login' icon={<TiSocialTwitter />}></IconButton>
            </Flex> */}
            <Text textAlign='center' mt='2' color='blue.300'>
                <Link href='/login'>
                    <a>Already have account?</a>
                </Link>
            </Text>
        </FormControl>
    );
};

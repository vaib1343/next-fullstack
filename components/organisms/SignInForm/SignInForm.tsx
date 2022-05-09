import { Button, Flex, FormControl, FormLabel, IconButton, Input, Text } from '@chakra-ui/react';
import { TiSocialGithub, TiSocialTwitter } from 'react-icons/ti';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { FormInput } from '../../atoms/FormInput/FormInput';

export const SignInForm = () => {
    return (
        <FormControl isRequired>
            <FormInput type='email' label='Email' name='email' placeholder='xyz@gmail.com' />
            <FormInput type='password' label='Password' name='password' placeholder='******' />
            <Button type='submit' mt='4'>
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

import { Button, Flex, FormControl, FormLabel, IconButton, Input, Text } from '@chakra-ui/react';
import { TiSocialGithub, TiSocialTwitter } from 'react-icons/ti';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export const SignInForm = () => {
    return (
        <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type='email' placeholder='xyz@gmail.com'></Input>
            <FormLabel>Password</FormLabel>
            <Input type='password' placeholder='*******'></Input>
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

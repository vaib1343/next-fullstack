import { Button, Flex, FormControl, FormLabel, IconButton, Input, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { TiSocialGithub, TiSocialTwitter } from 'react-icons/ti';

export const SignUpForm = () => {
    return (
        <FormControl isRequired>
            <FormLabel>Firstname</FormLabel>
            <Input type='text' placeholder='John' />
            <FormLabel>Lastname</FormLabel>
            <Input type='text' placeholder='Soff' />
            <FormLabel>Email</FormLabel>
            <Input type='email' placeholder='xyz@gmail.com'></Input>
            <FormLabel>Password</FormLabel>
            <Input type='password' placeholder='*******'></Input>
            <Button type='submit' mt='4'>
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

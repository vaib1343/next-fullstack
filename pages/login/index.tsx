import { Box, Flex,Heading, } from '@chakra-ui/react';
import { SignInForm } from '../../components/organisms/SignInForm/SignInForm';
export default function Login() {
    return (
        <Flex width='100vw' height='100vh' padding='4rem 12rem'>
            <Flex alignItems='center'>
                <Heading fontSize='5rem'>
                    Task Management <br /> Application
                </Heading>
            </Flex>
            <Flex justifyContent='center' alignItems='center' margin='1rem 8rem'>
                <Box boxShadow='lg' padding='4rem 4rem' borderRadius='10px'>
                    <SignInForm />
                </Box>
            </Flex>
        </Flex>
    );
}

Login.authPage = true

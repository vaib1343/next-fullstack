import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const Hero = () => {
    return (
        <Flex w='100%' bg='linear-gradient(to right, #FDB99B, #CF8BF3, #A770EF)'>
            <Container py='4rem'>
                <Heading>
                    Increase your productivity
                    <br />
                    Make your app in minutes
                </Heading>
                <Text mt='1rem' fontSize='2rem' color='gray.600'>
                    Your Fullstack React app
                </Text>
            </Container>
        </Flex>
    );
};

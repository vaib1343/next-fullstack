import React from 'react';
import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react';

export const LandingFooter = () => {
    return (
        <Box as='footer' backgroundColor='blue.300' paddingY='40px' position='fixed' width='100%' bottom='0px'>
            <Container>
                <SimpleGrid columns={2} spacing={8}>
                    <Box>Super App 2021</Box>
                    <Flex flexDirection='column'>
                        <Text>Follow us on</Text>
                        <Flex justifyContent='space-between' marginTop='16px'>
                            <Text>Instagram</Text>
                            <Text>Facebook</Text>
                            <Text>Twitter</Text>
                        </Flex>
                    </Flex>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

import { Box, Container, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';

export const LandingBody = () => {
    return (
        <Flex w='100%' padding='4rem'>
            <Flex w='50%' alignItems='center' justifyContent='center'>
                <Box w='375px' h='225px' bgColor='gray.300' borderRadius='5px'></Box>
            </Flex>
            <Flex marginLeft='32px' direction='column' justifyContent='center'>
                <Text>Including the market standard technologies</Text>
                <UnorderedList>
                    <ListItem>Next.js</ListItem>
                    <ListItem>Prisma</ListItem>
                    <ListItem>ChakraUI</ListItem>
                    <ListItem>PostgresSQL</ListItem>
                </UnorderedList>
            </Flex>
        </Flex>
    );
};

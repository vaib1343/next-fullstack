import { Button, Flex, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { MenuItem } from '../../molecules/MenuItems/MenuItem';

export default function Navbar() {
    return (
        <Flex width='100vw' flexDirection='row' alignItems='center' padding='10px 20px'>
            <Text cursor='pointer' fontWeight='bold' lineHeight='42px' color='#1f79ba' fontSize='36px' flexGrow={1}>
                <Link href='/'>
                    <a>SuperApp</a>
                </Link>
            </Text>
            <HStack spacing='16px' alignContent='center'>
                <MenuItem href='/blog' text='Blog' />
                <MenuItem href='/product' text='Product' />
                <MenuItem href='/pricing' text='Pricing' />
            </HStack>
            <Button variant='solid' bgColor='#1f79ba' color='white' marginLeft='82px'>
                Get Started
            </Button>
        </Flex>
    );
}

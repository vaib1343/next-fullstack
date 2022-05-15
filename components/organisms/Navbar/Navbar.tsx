import { Box, Button, Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { MenuItem } from '../../molecules/MenuItems/MenuItem';
import { RiPlayListAddLine, RiArchiveDrawerLine, RiListCheck } from 'react-icons/ri';
export default function Navbar() {
    return (
        <Flex width='100vw' justifyContent='center' alignItems='center'>
            <Flex boxShadow='lg' padding='1rem 2rem' borderRadius='1rem'>
                <Link href='/'>
                    <a>
                        <IconButton aria-label='List Task' mr='2rem' icon={<RiListCheck />} />
                    </a>
                </Link>
                <Link href='/createTask'>
                    <a>
                        <IconButton aria-label='Add Task' mr='2rem' icon={<RiPlayListAddLine />} />
                    </a>
                </Link>
                <IconButton aria-label='Delete Task' icon={<RiArchiveDrawerLine />} />
            </Flex>
        </Flex>
    );
}

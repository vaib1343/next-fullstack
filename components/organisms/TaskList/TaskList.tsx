import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { GrView } from 'react-icons/gr';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';
import { useAppselector } from '../../../redux/hooks';

export const TaskList = () => {
    const { tasks } = useAppselector((state) => state.task);

    return (
        <>
            <Box boxShadow='lg' padding='3rem 6rem' borderRadius='10px'>
                <Heading textAlign='center' my='.5rem'>
                    Tasks
                </Heading>
                {tasks.length ? (
                    tasks.map((li) => (
                        <Flex boxShadow='lg' padding='1rem 2rem' width='400px' alignItems='center' my='.5rem' borderRadius='10px' key={li.id}>
                            <Box flex='1'>
                                <Text>{li.title}</Text>
                            </Box>
                            <Flex>
                                <Box mx='.3rem' cursor='pointer'>
                                    <GrView />
                                </Box>
                                <Box mx='.3rem' cursor='pointer'>
                                    <MdOutlineDeleteOutline />
                                </Box>
                                <Box mx='.3rem' cursor='pointer'>
                                    <BiEditAlt />
                                </Box>
                            </Flex>
                        </Flex>
                    ))
                ) : (
                    <Box width='100%' padding='1.5rem 3rem' borderRadius='10px' bgColor='gray.200'> No task to perform</Box>
                )}
            </Box>
        </>
    );
};

import { Box, Flex, Heading } from '@chakra-ui/react';
import CreateTaskForm from '../components/organisms/CreateTaskForm/CreateTaskForm';

export default function createTask() {
    return (
        <Flex justifyContent='center' alignItems='center' height='calc(100vh - 82px)' flex='1'>
            <Box boxShadow='lg' padding='3rem 6rem' borderRadius='10px'>
                <Heading textAlign='center' m='1rem 0'>
                    Create Task
                </Heading>
                <CreateTaskForm />
            </Box>
        </Flex>
    );
}

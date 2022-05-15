import { Box, Button, Flex, FormControl, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import { DropDown } from '../components/atoms/DropDown/DropDown';
import { FormInput } from '../components/atoms/FormInput/FormInput';

type taskType = {
    title: string;
    descriptiion: string;
};

const Options = [
    { label: 'P1', value: 'p1' },
    { label: 'P2', value: 'p2' },
    { label: 'P3', value: 'p3' },
];

export default function createTask() {
    const [task, setTask] = useState<taskType>({} as taskType);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setTask((preState) => ({
            ...preState,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <Flex justifyContent='center' alignItems='center' height='calc(100vh - 82px)' flex='1'>
            <Box boxShadow='lg' padding='3rem 6rem' borderRadius='10px'>
                <Heading textAlign='center' m='1rem 0'>
                    Create Task
                </Heading>
                <FormControl>
                    <FormInput type='text' placeholder='Task title' label='Title' name='title' value={task.title} onChange={handleChange} />
                    <FormInput type='textArea' placeholder='Task description' label='Description' name='description' value={task.descriptiion} onChange={handleChange} />
                    <DropDown label='Priority' value='' onChange={handleChange} name='priority' options={Options} />
                    <Button variant='solid' mt='1rem' onClick={handleSubmit}>
                        Create
                    </Button>
                </FormControl>
            </Box>
        </Flex>
    );
}

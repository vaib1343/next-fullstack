import { Box, Button, Flex, FormControl, Heading, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useAppDispatch, useAppselector } from '../../../redux/hooks';
import { addTask } from '../../../redux/slice/taskSlice';
import { DropDown } from '../../atoms/DropDown/DropDown';
import { FormInput } from '../../atoms/FormInput/FormInput';

type taskType = {
    title: string;
    descriptiion: string;
    priority: string;
};

const Options = [
    { label: 'P1', value: 'P1' },
    { label: 'P2', value: 'P2' },
    { label: 'P3', value: 'P3' },
];

export default function createTaskForm() {
    const dispatch = useAppDispatch();
    const { status } = useAppselector((state) => state.task);
    const [task, setTask] = useState<taskType>({} as taskType);
    const toast = useToast();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setTask((preState) => ({
            ...preState,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(addTask(task))
            .unwrap()
            .then((res) => {
                if (Object.keys(res).length) {
                    setTask({ priority: '', descriptiion: '', title: '' });
                    toast({ title: 'Task created.', description: 'You have created task successfully.', status: 'success', duration: 6000, isClosable: true });
                }
            });
    };
    return (
        <FormControl>
            <FormInput type='text' placeholder='Task title' label='Title' name='title' value={task.title} onChange={handleChange} />
            <FormInput type='textArea' placeholder='Task description' label='Description' name='description' value={task.descriptiion} onChange={handleChange} />
            <DropDown label='Priority' value={task.priority} onChange={handleChange} name='priority' options={Options} />
            <Button isLoading={status === 'pending'} variant='solid' mt='1rem' onClick={handleSubmit}>
                Create
            </Button>
        </FormControl>
    );
}

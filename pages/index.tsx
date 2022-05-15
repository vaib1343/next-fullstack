import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { LandingBody } from '../components/organisms/LandingBody/LandingBody';
import { Hero } from '../components/molecules/Hero/Hero';
import Navbar from '../components/organisms/Navbar/Navbar';
import { LandingFooter } from '../components/organisms/LandingFooter/LandingFooter';
import { TaskList } from '../components/organisms/TaskList/TaskList';
import { useEffect } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { getTasks } from '../redux/slice/taskSlice';

const Home: NextPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTasks());
    }, []);

    return (
        <div>
            <Head>
                <title>Task Manager</title>
                <meta name='description' content='todo application' />
            </Head>
            <Flex width='100vw' height='calc(100vh - 82px)' justifyContent='center' alignItems='center'>
                <Box>
                    <TaskList />
                </Box>
            </Flex>
        </div>
    );
};

export default Home;

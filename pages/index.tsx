import { Button, Flex, HStack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Hero } from '../components/molecules/Hero/Hero';
import { MenuItem } from '../components/molecules/MenuItems/MenuItem';
import Navbar from '../components/organisms/Navbar/Navbar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>SuperApp</title>
                <meta name='description' content='todo application' />
            </Head>
            <Navbar />
            <Flex>
                <Hero />
            </Flex>
        </div>
    );
};

export default Home;

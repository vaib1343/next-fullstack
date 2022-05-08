import {Flex} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { LandingBody } from '../components/organisms/LandingBody/LandingBody';
import { Hero } from '../components/molecules/Hero/Hero';
import Navbar from '../components/organisms/Navbar/Navbar';
import { LandingFooter } from '../components/organisms/LandingFooter/LandingFooter';

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
            <LandingBody />
            <LandingFooter />
        </div>
    );
};

export default Home;

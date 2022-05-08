import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        // TwitterProvider({
        //     clientId: process.env.TWITTER_CLIENT_ID || '',
        //     clientSecret: process.env.TWITTER_CLIENT_SECRET || '',
        // }),
        GithubProvider({
            clientId: process.env.GIT_CLIENT_ID,
            clientSecret: process.env.GIT_CLIENT_SECRET,
        }),
    ],
});

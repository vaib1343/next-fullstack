import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/prisma';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import { verifyPass } from '../../../utils/passwordHandler';

const tokenSecret = process.env.TOKEN_SECRET as string;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        loginHandler(req, res);
    }
}

async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
    let { email, password } = req.body;
    if (!email || !password) {
        res.status(500).json({ message: 'Field required' });
        return;
    }
    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user || !verifyPass(password, user?.password)) {
            res.status(401).json({ message: 'Wrong credentials' });
        }
        const token = jwt.sign({ ...user }, tokenSecret, { expiresIn: '8h' });
        res.setHeader(
            'set-Cookie',
            cookie.serialize('TRAX_ACCESS_TOKEN', token, {
                httpOnly: true,
                maxAge: 8 * 60 * 60,
                path: '/',
                sameSite: 'lax',
                secure: process.env.NODE_ENV === 'production',
            })
        )
            .status(200)
            .json({ ...user });
    } catch (error) {}
}

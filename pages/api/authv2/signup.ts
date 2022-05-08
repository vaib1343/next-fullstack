import { NextApiRequest, NextApiResponse } from 'next';
import { generatePass } from '../../../utils/passwordHandler';
import prisma from '../../../utils/prisma';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';

const tokenSecret = process.env.TOKEN_SECRET as string

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        signUpHandler(req, res);
    }
}

async function signUpHandler(req: NextApiRequest, res: NextApiResponse) {
    let { email, password, firstName, lastName } = req.body;
    let user;

    if (!email || !password) {
        res.status(500).json({ message: 'Field required' });
        return;
    }
    password = generatePass(password);

    try {
        user = await prisma.user.create({
            data: {
                name: firstName + lastName,
                email,
                password,
            },
        });
    } catch (error) {
        console.log(error);
    }

    const token = jwt.sign({ user }, tokenSecret , { expiresIn: '8h' });

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
        .json(user);
}

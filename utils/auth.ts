import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './prisma';

export const validateRoute = (handler: (req: NextApiRequest, res: NextApiResponse, user: object) => void) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const { TRAX_ACCESS_TOKEN: Token } = req.cookies;
        let user;
        try {
            if (Token) {
                const { id } = jwt.verify(Token, process.env.TOKEN_SECRET);
                user = await prisma.user.findUnique({
                    where: {
                        id,
                    },
                });
                if (!user) {
                    throw new Error('User not found');
                }
            } else {
                throw new Error('Token not found');
            }
        } catch (error) {
            res.status(401).json({ message: error.message });
            return;
        }
        return handler(req, res, user);
    };
};

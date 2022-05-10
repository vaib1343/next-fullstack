import { NextApiRequest, NextApiResponse } from 'next';
import { validateRoute } from '../../utils/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        getUser(req, res);
    }
}

const getUser =  validateRoute((req: NextApiRequest, res: NextApiResponse, user: object) => {
    res.status(200).json(user);
    return;
});

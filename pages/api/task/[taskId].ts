import { NextApiRequest, NextApiResponse } from 'next';
import { validateRoute } from '../../../utils/auth';
import prisma from '../../../utils/prisma';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        getTask(req, res);
    }
}

const getTask = validateRoute(async (req: NextApiRequest, res: NextApiResponse, user: object) => {
    try {
        const { taskId } = req.query;
        const task = await prisma.task.findUnique({
            where: {
                id: taskId,
            },
        });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json(error);
    }
});

const updateTask = validateRoute((req: NextApiRequest, res: NextApiResponse, user: object) => {
    try {
        
    } catch (error) {
        
    }
});

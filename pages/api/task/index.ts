import prisma from '../../../utils/prisma';
import { validateRoute } from '../../../utils/auth';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            getTaskList(req, res);
            return;
        case 'POST':
            createTask(req, res);
    }
}

const getTaskList = validateRoute(async (req: NextApiRequest, res: NextApiResponse, user: object) => {
    try {
        const tasks = await prisma.task.findMany({
            where: {
                user: {
                    id: user.id,
                },
            },
        });
        res.status(200).json({ tasks });
        return;
    } catch (error) {
        res.status(500).json({ message: 'Cannot fetch task' });
    }
});

const createTask = validateRoute(async (req: NextApiRequest, res: NextApiResponse, user: object) => {
    try {
        const { title, description, priority } = req.body;
        const task = await prisma.task.create({
            data: {
                title,
                description,
                priority,
                user: {
                    connect: {
                        id: user.id,
                    },
                },
                Status: 'CREATED',
            },
        });
        res.status(200).json({ task });
    } catch (error) {
        console.log(error);
    }
});

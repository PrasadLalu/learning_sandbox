import { Router, Request, Response } from 'express';

const router = Router();

router.get('/health-check', (req: Request, res: Response) => {
    return res.send({ message: 'Healthy!' });
});

export default router

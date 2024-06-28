// src/routes/trainers.ts
import express, { Request, Response } from 'express';
import Trainer, { ITrainer } from '../models/Trainer';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    const trainer: ITrainer = new Trainer(req.body);
    try {
        const savedTrainer = await trainer.save();
        res.json(savedTrainer);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/', async (req: Request, res: Response) => {
    try {
        const trainers = await Trainer.find();
        res.json(trainers);
    } catch (err) {
        res.json({ message: err });
    }
});

export default router;

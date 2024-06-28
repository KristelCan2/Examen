// src/routes/teams.ts
import express, { Request, Response } from 'express';
import Team, { ITeam } from '../models/Team';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    const team: ITeam = new Team(req.body);
    try {
        const savedTeam = await team.save();
        res.json(savedTeam);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/', async (req: Request, res: Response) => {
    try {
        const teams = await Team.find().populate('trainer');
        res.json(teams);ñ
    } catch (err) {
        res.json({ message: err });
    }
});

export default router;

// src/models/Trainer.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ITrainer extends Document {
    firstName: string;
    lastName: string;
    gender: string;
    residence: string;
    photoUrl: string;
}

const TrainerSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, required: true },
    residence: { type: String, required: true },
    photoUrl: { type: String, required: true },
});

export default mongoose.model<ITrainer>('Trainer', TrainerSchema);

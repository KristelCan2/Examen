// src/models/Team.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ITeam extends Document {
    name: string;
    imageUrl: string;
    trainer: mongoose.Types.ObjectId;
    pokemons: string[];
}

const TeamSchema: Schema = new Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    trainer: { type: Schema.Types.ObjectId, ref: 'Trainer', required: true },
    pokemons: { type: [String], required: true }
});

export default mongoose.model<ITeam>('Team', TeamSchema);

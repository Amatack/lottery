import fs from 'fs'
import {obtainParticipants} from "./obtain-participants"
import {IUser} from "../models/user-model"

type User = {
    username: string;
    email: string
}

export function registerUser(user: User): void{
    const newParticipant: IUser = {
        ...user,
        date: new Date(),
    }

    const participants = obtainParticipants();
    participants.push(newParticipant);

    const data = JSON.stringify(participants);
    fs.writeFileSync("participants.json", data);
}
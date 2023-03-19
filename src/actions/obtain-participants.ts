import fs from "fs";
import {IUser} from "../models/user-model";

export function obtainParticipants(): Array<IUser>{
    const response = fs.readFileSync("participants.json","utf8");

    if(!response) return [];

    return JSON.parse(response)

}
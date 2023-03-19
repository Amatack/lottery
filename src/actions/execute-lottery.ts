import { obtainParticipants } from "./obtain-participants";
import {sampleSize} from "lodash"
import {IUser} from "../models/user-model"

export function executeLottery(winners:number = 1):Array<IUser>{
    const participants = obtainParticipants();


    /* const indexWinner = (Math.random() * participants.length) | 0
    const winner = participants[indexWinner]} */

    const result = sampleSize(participants, winners);
    
    return result;
    
}

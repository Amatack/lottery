import {obtainParticipants} from "./obtain-participants"

export function totalParticipants():number{
    const response = obtainParticipants();
    return response.length;
}
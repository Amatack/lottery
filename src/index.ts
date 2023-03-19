import inquirer from "inquirer";
import {registerUser} from "./actions/register-user"
import {obtainParticipants} from "./actions/obtain-participants"
import { totalParticipants } from "./actions/total-participants";
import { executeLottery } from "./actions/execute-lottery";

(async()=>{
    const options = [
        {
            name: "options",
            type: "list",
            message: "¿Qué quieres hacer?",
            choices: [
                "Registrar participantes",
                "Lista de participantes",
                "Obtener total de participantes",
                "Generar Ganadores",
                "Salir"
            ]
        }
    ]
    const result = await inquirer.prompt(options)

    if(result.options === "Registrar participantes"){
        register()
    }

    if(result.options === "Lista de participantes"){
        const participants = obtainParticipants()
        console.log(participants)
    }

    if(result.options === "Obtener total de participantes"){
        const total = totalParticipants();
        console.log(`Hay ${total} participantes registrados en el sorteo`)
    }

    if(result.options === "Generar Ganadores"){
        
        console.log("###############")
        console.log("###GANADORES###")
        console.log("###############")

        const winners = await execLottery();
        console.log(winners)
        
        /* const winner =  executeLottery()
        console.log(winner) */
        
    }
})()

async function register(){
    const qs = [{
        name: "username",
        type: "input",
        message: "Nombre del Participante "
    },
    {
        name:"email",
        type:"input",
        message:"email del participante"
    }]

    
    const result = await inquirer.prompt(qs)
    registerUser(result)
}

async function execLottery(){
    const qs = [
        {
            name: "totalWinners",
            type: "number",
            message: "¿Cuantos ganadores quieres sacar?"
        }
    ]

    const {totalWinners} = await inquirer.prompt(qs)

    if(!totalWinners){
        return 'ERROR: Tienes q introducir un numero valido'
    }

    const result = executeLottery(totalWinners)

    return result
}


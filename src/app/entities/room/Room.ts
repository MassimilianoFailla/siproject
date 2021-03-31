import { runInThisContext } from "node:vm";

export class Room{

    nomeStanza: string;
    capienza: number;
    contaPersone: number;
    temperatura: DoubleRange;

    constructor(nomeStanza: string, capienza: number, contaPersone: number, temperatura: DoubleRange){

        this.nomeStanza = nomeStanza;
        this.capienza = capienza;
        this.contaPersone = contaPersone;
        this.temperatura = temperatura;

    }

}
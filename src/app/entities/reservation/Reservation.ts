import { Room } from '../room/Room';
import { Users } from '../user/Users';

export class Reservation{

    dataInizio: Date;
    dataFine: Date;
    utente: Users;
    descrizione: string; 
    stanza: Room; 

    constructor(dataInizio: Date, dataFine: Date, utente: Users, descrizione: string, stanza: Room ){

        this.dataInizio = dataInizio;
        this.dataFine = dataFine;
        this.utente = utente;
        this.descrizione = descrizione; 
        this.stanza = stanza;
    
    }

}
import { MyHeaders } from './../../Config/MyHeaders';
import { Component, OnInit } from '@angular/core';
import { tableConfig } from 'src/app/Config/tableConfig';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headerRes: MyHeaders[] = [

    { key: 'dataInizio', label: 'Data Inizio '},
    { key: 'dataFine', label: 'Data Fine '},
    { key: 'utente', label: 'Nominativo utente'},
    { key: 'descrizione', label: 'Descrizione'},
    {key: 'stanza', label: 'Stanza'},

  ];


    // configurazione tabella
    tables: tableConfig = {
    headers: this.headerRes,
    data: '',
    order: null,
    search: null,
    pagination: null,

};



}

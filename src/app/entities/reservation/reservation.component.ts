import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headerRes = [
    { key: 'id', label: 'ID Prenotazione'},
    { key: 'dataInizio', label: 'Data Inizio Prenotazione'},
    { key: 'dataFine', label: 'Data Fine Prenotazione'},
    { key: 'approvazione', label: 'Approvazione' },
  ];



}

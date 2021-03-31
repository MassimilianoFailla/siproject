import { Component, Input, OnInit } from '@angular/core';
import { tableConfig } from '../Config/tableConfig';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  // unica configurazione tabella
  @Input() tables: tableConfig;


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { buttonConfig } from '../Config/buttonConfig';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  constructor() { }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // potrebbe servire successivamente 
  
  // buttonUser: buttonConfig = {
  //   text: 'Users',
  //   icon: 'supervisor_account',
  //   customCssClass: 'btn btn-light btn-sm',
  // };

  buttonForReservation: buttonConfig = {
    text: 'Reserve a room',
    icon: 'space_dashboard',
    customCssClass: 'btn btn-light btn-sm',
  };

  buttonReservation: buttonConfig = {
    text: 'Reserved Rooms',
    icon: 'space_dashboard',
    customCssClass: 'btn btn-light btn-sm',
  };

}
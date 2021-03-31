import { ReservedRoomComponent } from './reserved-room/reserved-room.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { ReserveARoomComponent } from './reserve-aroom/reserve-aroom.component';

const routes: Routes = [
   
   {path: "/reservedRoom", component: ReservedRoomComponent},
   {path: "/reserveARoom", component: ReserveARoomComponent},

];
@NgModule({ 
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [RouterModule] 
}) 
export class AppRoutingModule { }
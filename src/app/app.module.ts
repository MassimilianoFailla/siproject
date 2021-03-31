import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './entities/user/user.component';
import { RoomComponent } from './entities/room/room.component';
import { ReservationComponent } from './entities/reservation/reservation.component';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservedRoomComponent } from './reserved-room/reserved-room.component';
import { ReserveARoomComponent } from './reserve-aroom/reserve-aroom.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RoomComponent,
    ReservationComponent,
    TableComponent,
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    ReservedRoomComponent,
    ReserveARoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    MatSliderModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

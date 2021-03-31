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
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
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
    HomeComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    MatSliderModule,
    NgbModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

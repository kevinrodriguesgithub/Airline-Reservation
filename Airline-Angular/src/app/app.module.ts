import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponent } from './components/mycomponent.component';
import { TopNav } from './components/topnav.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FlightListComponent } from './components/flights/flights.component';
import { AddFlightComponent } from './components/flights/add-flight/add-flight.component';
import { DeleteFlightComponent } from './components/flights/delete-flight/delete-flight.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details/flight-details.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login-comp/login-comp';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddPassengerComponent } from './components/passenger/add-passenger/add-passenger.component';
import { CancelPassengerComponent } from './components/passenger/cancel-passenger/cancel-passenger.component';
import { SearchFlightComponent } from './components/flights/search-flight/search-flight.component';
import { SearchResultComponent } from './components/flights/search-result/search-result.component';
import { AirserviceService } from './services/airservice.service';
import { CustomPipePipe } from './custom-pipe.pipe';
import { MyserviceService } from './services/login-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    TopNav,
    FlightListComponent,
    AddFlightComponent,
    FlightDetailsComponent,
    PaymentComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DeleteFlightComponent,
    AddPassengerComponent,
    CancelPassengerComponent,
    SearchFlightComponent,
    SearchResultComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AirserviceService, MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

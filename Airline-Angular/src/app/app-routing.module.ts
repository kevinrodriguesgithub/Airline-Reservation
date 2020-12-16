import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FlightListComponent } from "./components/flights/flights.component";
import { FlightDetailsComponent } from "./components/flight-details/flight-details/flight-details.component";
import { PaymentComponent } from "./components/payment/payment.component";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login-comp/login-comp";
import { AddFlightComponent } from "./components/flights/add-flight/add-flight.component";
import { DeleteFlightComponent } from "./components/flights/delete-flight/delete-flight.component";
import { AddPassengerComponent } from "./components/passenger/add-passenger/add-passenger.component";
import { CancelPassengerComponent } from "./components/passenger/cancel-passenger/cancel-passenger.component";
import { SearchFlightComponent } from "./components/flights/search-flight/search-flight.component";
import { SearchResultComponent } from "./components/flights/search-result/search-result.component";

const routes: Routes = [
  { path: 'flights', component: FlightListComponent },
  { path: 'flight-details', component: FlightDetailsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full' },  
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path:'addFlight', component:AddFlightComponent},
  {path:'DelFlight', component:DeleteFlightComponent},
  {path:'addPassenger', component:AddPassengerComponent},
  { path: 'getPassenger', component: CancelPassengerComponent },
  { path: 'searchFlight', component: SearchFlightComponent },
  { path: 'searchResults', component: SearchResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
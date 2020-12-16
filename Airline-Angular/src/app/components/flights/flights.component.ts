import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'flight-list',
  templateUrl: 'flights.component.html'
})
export class FlightListComponent implements OnInit {

  admin: boolean = false;
  user: boolean = false;
  sessionParam: any;
  flightList: Observable<any>[] = [];

  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit() { 
    this.sessionParam = sessionStorage.getItem('role');
    if (this.sessionParam == 'admin') {
      this.admin = true;
      this.loadFlights();
    }else  if(this.sessionParam == 'user' || this.sessionParam == null){
      this.user = true;
    }
    
  }
  loadFlights() {
    this.flightService.getAllFlight().subscribe(data => {
      this.flightList = data;
      console.log(this.flightList);
    });
  }

}
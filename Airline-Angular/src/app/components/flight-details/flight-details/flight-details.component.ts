import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IFlightDetails } from 'src/app/models/IFlight-Details';
import { FlightDetailsService } from 'src/app/services/flight-details.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styles: [
  ]
})
export class FlightDetailsComponent implements OnInit {

  param: string;
  flightDetObj: Observable<any>[] = [];
  search: number;
  ticket: any;

  constructor(private flightDetService: FlightDetailsService, private router: Router) { }

  ngOnInit(): void {
    this.param = "flightDetByFId";
  }

  public getFlightById(id) {
    this.param = "flightDetByFId";
    this.flightDetService.getFlightById(id).subscribe(data => {
      this.flightDetObj = data;
      console.log(this.flightDetObj);
    });
  }

  public getFlightDetailsByTicket(ticket) {
    this.param = "flightDetByTicket";
    this.flightDetService.getFlightDetailsByTicket(ticket).subscribe(data => {
      this.flightDetObj = data;
      console.log(this.flightDetObj);
    });
  }



}

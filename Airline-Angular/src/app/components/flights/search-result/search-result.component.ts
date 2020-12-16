import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AirserviceService, Flight } from 'src/app/services/airservice.service';
import { SearchFlightComponent } from '../search-flight/search-flight.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styles: [
  ]
})
export class SearchResultComponent implements OnInit {

  flightList:any;
  admin: boolean = false;
  user: boolean = false;
  sessionParam: any;
  aList = [];
  flightId;

  constructor(private airservice: AirserviceService, private router: Router) { }

  ngOnInit(): void {
    this.sessionParam = sessionStorage.getItem('role');
    if (this.sessionParam == 'admin') {
      this.admin = true;
    }else  if(this.sessionParam == 'user' || this.sessionParam == null){
      this.user = true;
      this.flightList = this.airservice.getFlightList();
    }
  }

  redirectToPassenger(fid) {
    console.log("fid:" + fid);
    this.flightId = document.getElementById('flightid').innerHTML;
    sessionStorage.setItem('flightid', this.flightId);
    this.router.navigate(["/addPassenger"]).then(() => {
      window.location.reload();
    });
  }
}

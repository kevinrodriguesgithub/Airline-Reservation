import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AirserviceService, Flight } from 'src/app/services/airservice.service';
import { MyserviceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styles: [
  ]
})
export class SearchFlightComponent implements OnInit {

  message: string;
  admin: boolean = false;
  user: boolean = false;
  sessionParam: any;
  flightList: any;
  constructor(private myservice: AirserviceService,private router: Router) { }

  ngOnInit(): void {
    this.sessionParam = sessionStorage.getItem('role');
    if (this.sessionParam == 'admin') {
      this.admin = true;
    }else  if(this.sessionParam == 'user' || this.sessionParam == null){
      this.user = true;
    }
  }

  onSubmit(adduser:Flight):any{
    console.log(adduser);
    console.log(adduser.from_loc);
    console.log(adduser.to_loc);
    this.myservice.searchFlight(adduser).subscribe(data => {
      this.flightList = data;
      console.log("flightList:"+this.flightList);
      
      this.myservice.setFlightList(this.flightList);
    });
    setTimeout(()=>this.router.navigate(['/searchResults']), 2500);
  }
  getFlightList() {
    return this.flightList;
  }
  // loadFlights() {
  //   this.myservice.searchFlight(srch).subscribe(data => {
  //     this.flightList = data;
  //     console.log(this.flightList);
  //   });
  // }

}

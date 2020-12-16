import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirserviceService, Flight } from '../../../services/airservice.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  message: string;
  admin: boolean = false;
  user: boolean = false;
  sessionParam: any;

  constructor(private airservice:AirserviceService ,private router:Router) { }

  ngOnInit(): void {
    this.sessionParam = sessionStorage.getItem('role');
    if (this.sessionParam == 'admin') {
      this.admin = true;
    }else  if(this.sessionParam == 'user' || this.sessionParam == null){
      this.user = true;
    }
  }
  onSubmit(addFlight:Flight):any{
    console.log(addFlight);
    this.airservice.addFlight(addFlight).subscribe(data=>{
      this.message = data});
    alert("Flight Added Successfully");
    this.router.navigate(['/flights']);
  }

}

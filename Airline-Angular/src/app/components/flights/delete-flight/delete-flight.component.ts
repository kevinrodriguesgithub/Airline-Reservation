import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirserviceService, Flight } from '../../../services/airservice.service';

@Component({
  selector: 'app-delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.css']
})
export class DeleteFlightComponent implements OnInit {
  message: string;
  admin: boolean = false;
  user: boolean = false;
  sessionParam: any;
  flight: Flight[];

  constructor(private airservice:AirserviceService,private router: Router) { }

  ngOnInit(): any {
    this.sessionParam = sessionStorage.getItem('role');
    if (this.sessionParam == 'admin') {
      this.admin = true;
      this.airservice.getFlight().subscribe(response=>this.handleSuccessfulResponse(response));
    }else  if(this.sessionParam == 'user' || this.sessionParam == null){
      this.user = true;
    }
  }
  handleSuccessfulResponse(response){
    this.flight=response;
  }
  delete(deleteFlight:Flight):any{
    this.airservice.delete(deleteFlight.id).subscribe(data=>{this.message=data});
   this.flight.splice(this.flight.indexOf(deleteFlight),1);
    alert("Flight Deleted");
 
     this.router.navigate(['/flights']);
  }

}

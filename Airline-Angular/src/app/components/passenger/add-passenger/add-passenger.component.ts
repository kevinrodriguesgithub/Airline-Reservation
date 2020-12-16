import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger, PassengerserviceService } from '../../../services/passengerservice.service';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.css']
})
export class AddPassengerComponent implements OnInit {
  message: string;
  count: number = 3;
  c = 1;
  userId;
  flightId;

  btn=false;

  constructor(private passservice:PassengerserviceService  ,private router:Router) { }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userid');
    this.flightId = sessionStorage.getItem('flightid');
    console.log("userid in add passenger" + this.userId);
    console.log("flightid in add passenger" + this.flightId);
  }
  onSubmit(addPassenger:Passenger):any{
    console.log(addPassenger);
    this.passservice.addPassenger(addPassenger).subscribe(data=>{
      });
      alert(String(this.c)+" Passenger added");
      if(this.onSubmit && this.count!=1){
        this.count-=1;
        this.c++;
        console.log(this.count);
      }
      else {
         console.log("Cannot add more Passengers");
         this.btn=true;
         document.getElementById('submit').innerHTML="cannot add more Passengers";
         document.getElementById('submit').setAttribute("disabled","disabled");
         alert("All Passengers have been added");

       
      }

      

  }
  

}
  





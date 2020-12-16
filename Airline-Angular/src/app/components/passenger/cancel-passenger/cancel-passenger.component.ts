import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger, PassengerserviceService } from '../../../services/passengerservice.service';

@Component({
  selector: 'app-cancel-passenger',
  templateUrl: './cancel-passenger.component.html',
  styleUrls: ['./cancel-passenger.component.css']
})
export class CancelPassengerComponent implements OnInit {

user_id="";
passenger:Passenger[]=[];
search = false;
message:string;
PassengerList:Passenger[] =[];


  constructor(private passservice:PassengerserviceService  ,private router:Router) { }
   
   refill(){

    this.passenger = [];
    this.search = false;
    this.user_id = "";

   }


   handleSuccessfulResponse(response){
     this.passenger=response;
   }
   PassSearch(delPass:Passenger):any{
    this.search = true;
    this.passservice.getPassenger(delPass.user_id).subscribe(response=>this.handleSuccessfulResponse(response));
    console.log(delPass);
    
    for(let i=0;i<this.PassengerList.length;i++){
      if(this.PassengerList[i].user_id == delPass.user_id){
        this.passenger.push(this.PassengerList[i]);
        
      }
    }
  }

  delete(deletePass:Passenger):any{
    this.passservice.delete(deletePass.id).subscribe(data =>{this.message=data});
    this.passenger.splice(this.passenger.indexOf(deletePass),1);
    
    alert("Ticket Cancelled");

  }
  ngOnInit(): void {} 
}
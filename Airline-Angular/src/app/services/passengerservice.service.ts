import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PassengerserviceService {

  constructor(private httpService:HttpClient) { }
  public addPassenger(addPassenger:Passenger){
    console.log(addPassenger);
    const headers=new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8080/Airline/passengers/createPassenger",addPassenger,{headers,responseType:'text'});
 
  }

  public getPassenger(user_id:number){
    const headers=new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Passenger>("http://localhost:8080/Airline/passengers/GetPassengerByUserId/"+ user_id);

  }
  delete(id :number){
    const headers=new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:8080/Airline/passengers/deletePassenger/"+ id,{headers,responseType:'text'});
  
  
  }
 
}
export class Passenger {
  id:number;
  user_id:number;
  name:string;
  date_of_birth:Date;
  gender:string;
  flight_id:number;

}

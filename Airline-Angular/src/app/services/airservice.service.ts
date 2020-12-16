import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirserviceService {
  flightList: any;  
  apiUrl = "http://localhost:8080/Airline/flights";

  constructor(private httpService: HttpClient) { 
    // alert("flightList value:" + this.flightList);
 }
 public addFlight(addFlight:Flight){
   console.log(addFlight);
   const headers=new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
   return this.httpService.post("http://localhost:8080/Airline/flights/AddFlight",addFlight,{headers,responseType:'text'});

 }
  
  setFlightList(list) {
    this.flightList = list;
  }

  getFlightList() {
    return this.flightList;
  }
 public getFlight(){
  const headers=new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.get<Flight>("http://localhost:8080/Airline/flights/GetAllFlights");
}
delete(id :number){
  const headers=new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.delete("http://localhost:8080/Airline/flights/DeleteFlight/"+ id,{headers,responseType:'text'});
}

  searchFlight(srch: Flight) : Observable<any>{
    console.log("search service called");
    console.log(srch);
    const headers =new HttpHeaders().set('Content_Type', 'text ;charset=utf-8');  
    return this.httpService.post<any[]>(`${this.apiUrl}` + '/search', srch);
    
  }
}

export class Flight {
  id:number;
  name:string;
  from_loc:string;
  to_loc:string;
  depart:string;
  arrive:string;
  base_price:number;
  duration: string;
  
  constructor(){}

}

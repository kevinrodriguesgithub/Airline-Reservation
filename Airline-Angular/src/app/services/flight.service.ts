import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFlight } from '../models/IFlight';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}; 

@Injectable({
  providedIn: 'root'
})
  
export class FlightService {

  private baseUrl = 'http://localhost:8080/Airline/flights';
  
  constructor(private http: HttpClient) { }

  addFlight(flight: Object): Observable<Object> {
    console.log(this.http.post(`${this.baseUrl}` + 'AddFlight', flight));
    return this.http.post(`${this.baseUrl}` + 'AddFlight', flight);
  }

  getAllFlight() {
    console.log(this.http.get<any[]>(`${this.baseUrl}` + '/GetAllFlights'));
    return this.http.get<any[]>(`${this.baseUrl}` + '/GetAllFlights');
  }

  viewFlight(map: any) : Observable<any> {
    return this.http.post(`${this.baseUrl}` + '/ViewFlight', map);
  }

  deleteFlightById(id: number) {
    console.log(this.http.delete(`${this.baseUrl}` + '/DeleteFlight/' + id));
    return this.http.delete(`${this.baseUrl}` + '/DeleteFlight/' + id);
  }

}
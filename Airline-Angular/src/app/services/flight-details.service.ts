import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}; 

@Injectable({
  providedIn: 'root'
})
export class FlightDetailsService {
  private baseUrl = 'http://localhost:8080/Airline/fd';

  constructor(private http: HttpClient) { }

  getFlightById(id: number): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}` + '/flight/' + id);
    
  }

  getFlightDetailsByTicket(ticket): Observable<any> {
    console.log(ticket);
    console.log(this.http.get<any[]>(`${this.baseUrl}` + "/fdetailticket?ticket='" + ticket+"'"));
    return this.http.get<any[]>(`${this.baseUrl}` + "/fdetailticket?ticket='" + ticket+"'");
  }
}

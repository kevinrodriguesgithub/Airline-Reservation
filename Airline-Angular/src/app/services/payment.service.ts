import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/Payment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'http://localhost:8080/Airline/payments';

  constructor(private http: HttpClient) { }

  makePayment(payment: Object): Observable<Object> {
    console.log(this.http.post(`${this.baseUrl}` + '/new', payment));
    return this.http.post(`${this.baseUrl}` + '/new', payment);
  }
}

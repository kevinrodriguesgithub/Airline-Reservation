import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'http://localhost:8080/Airline/users/';

  constructor(private http:HttpClient) { }

  public doRegistration(user){
      return this.http.post(`${this.baseUrl}`+'UserCreation',user,{responseType:'text' as 'json' });
  }

}


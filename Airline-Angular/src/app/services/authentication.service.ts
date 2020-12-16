import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginUser } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl= 'http://localhost:8080/Airline/users';

  constructor(private http: HttpClient) { }
  
  authenticate(username, password) {
    return this.http.post<any>(`${this.apiUrl}` + '/logincheck', { username, password }).subscribe(data => {
      sessionStorage.setItem('username', username);
      let tokenStr = 'TokenHolder' + data.token;
      sessionStorage.setItem('token', tokenStr);
      return data;
    });
  }

  checkLogIn(): boolean {
    let user = sessionStorage.getItem('username');
    if(user == null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  logout() {
    sessionStorage.removeItem('username');
  }

  getRole(username:String) {
    return this.http.get(`${this.apiUrl}`+'/getRole?username='+ username);
  }

}

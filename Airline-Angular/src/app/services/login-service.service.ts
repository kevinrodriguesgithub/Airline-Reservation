import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
  })

  export class MyserviceService {

    userList: any;
   apiUrl= 'http://localhost:8080/Airline/users';

  constructor(private httpService: HttpClient, private router: Router) { }
  
  setUserList(list) {
    this.userList = list;
  }

  getUserList() {
    return this.userList;
  }
 
/*
 //login
 
public loginUser(email:string,password:string):Observable<any>{
  console.log("ins service login user");
    console.log({email});
    console.log({password});
    const headers =new HttpHeaders().set('Content_Type', 'application/json ;charset=utf-8');
    console.log("${email}");
   // return this.httpService.post("http://localhost:8713/users/loginUser/${email}/${password}", { headers, responseType: 'text'});
     return this.httpService.post(`${this.apiUrl}/${email}/${password}`, {headers, responseType: 'text'});
    

}
*/

public loginUser(adduser: User) : Observable<any> {
  console.log("ins service add");
  console.log(adduser);
  sessionStorage.setItem('username', adduser.email);
  console.log("session item username set as:"+adduser.email);
  // sessionStorage.setItem('email', adduser.pwd);
  

  const headers =new HttpHeaders().set('Content_Type', 'text ;charset=utf-8');
  return this.httpService.post<any[]>(`${this.apiUrl}`+'/logincheck', adduser);
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
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('userid');
    sessionStorage.removeItem('flightid');
    this.router.navigate(["/"]);
  }

public updateUser(updateuser: loginUser) {
  console.log("ins service add");
  console.log(updateuser);
  

  const headers =new HttpHeaders().set('Content_Type', 'application/json ;charset=utf-8');
  return this.httpService.post(`${this.apiUrl}`+'/resetpwd', updateuser,  { headers, responseType: 'text'});
}



  }

  export class loginUser {
    
    email: string;
    pwd:string;
  }



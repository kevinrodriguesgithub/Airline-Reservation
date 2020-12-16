import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
//import { LoggedUser, LoginService } from 'src/app/myservice.service';

 //final

import { loginUser, MyserviceService } from '../../services/login-service.service';
@Component({
    selector: 'login-comp',
    templateUrl: './login-comp.html',
    styleUrls: ['./login-comp.css']
  })
  
  export class LoginComponent implements OnInit{
  
    ngOnInit(): void {
      // sessionStorage.setItem();
  }
  username = "admin";
  password = "admin";
  user: User;
  message: string;
  invalidLogin: boolean = false;
  userList: any;
  userValues = [];

    constructor(private myservice: MyserviceService,private router: Router, private loginservice: AuthenticationService)  { }
/*
 //login
      onSubmit(d:loginUser ):any {
            //console.log("Form username : " + value);
            console.log(d.email);
            console.log(d.password);
            this.myservice. loginUser(d).subscribe(data=>{
                this.message=data});

          } 
     */
    
     
    async onSubmit(adduser:User):Promise<any>{
      console.log(adduser);
      console.log(adduser.email);
      console.log(adduser.pwd);
       
      if(adduser.email=="admin@gmail.com" && adduser.pwd=="admin")
      {
        this.message = "Logged in as Admin";
          sessionStorage.setItem('username', adduser.email);
          sessionStorage.setItem('role', 'admin');
          sessionStorage.setItem('id', '1');
          this.router.navigate(["/flights"]).then(()=> {
          window.location.reload();
      });
      }
      else{

        console.log("not admin");
        this.myservice.loginUser(adduser).subscribe(data => {
         this.userList = data;
          console.log("userlist:" + this.userList);
          this.myservice.setUserList(this.userList);
        });
        for (let value of Object.values(this.userList)) {
          this.userValues.push(value);
        }
        setTimeout(() => {
          if (this.userList != null) {
            alert("Logged in successfully!");
            for (let x of this.userValues) {
              console.log("x email:"+x.email);
              console.log("x.role:"+x.role);
              console.log("x.id:"+x.id);
              sessionStorage.setItem('username', x.email);
              sessionStorage.setItem('role', x.role);
              sessionStorage.setItem('userid', x.id);
            }
            this.router.navigate(["/searchFlight"]).then(() => {
              window.location.reload();
            });
          }
        }, 2000
        );
        

        }
        
    }

  // checkLogin() {
  //   console.log('username:' + this.username);
  //   console.log('password:'+this.password);
  //   if (this.loginservice.authenticate(this.username, this.password)) {
  //       this.loginservice.getRole(this.username).subscribe((data: User)=> {
  //         this.user = data;
  //         console.log("Printing from ts:"+this.user);
  //         this.redirect();
  //       });
  //     }
  //     else {
  //       console.log("Invalid Login Credentials..");
  //       this.invalidLogin = true;
  //     }
  // }
  
  // redirect() {
  //   console.log("redirect called");
  //   if(this.user.role === 'user' || this.user.role === 'null') {
  //     console.log('user redirect');
  //     sessionStorage.setItem('role', 'customer');
  //     sessionStorage.setItem('userId', String(this.user.id));
  //     this.invalidLogin = false;
  //     this.router.navigate(["/login"]).then(()=> {
  //       window.location.reload();
  //     });
  //   }
  //   else if (this.user.role === 'admin') {
  //     console.log('admin redirect');
  //     sessionStorage.setItem('role', 'admin');
  //     sessionStorage.setItem('userId', String(this.user.id));
  //     this.invalidLogin = false;
  //     this.router.navigate(["login"]).then(()=> {
  //       window.location.reload();
  //     });
  //   }
  // }

    }
    





   
  
  
  


  
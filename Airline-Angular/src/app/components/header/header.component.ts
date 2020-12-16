import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls : ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  buttonFlag:boolean;
    username:string;
    user:boolean;
    admin:boolean;

  constructor( private authenticationService: MyserviceService) { }

  ngOnInit(): void {
    this.user=false;
        this.admin=false;
        if(sessionStorage.getItem('role')==='user'){
            this.user=true;
        }else if(sessionStorage.getItem('role')==='admin'){
            this.admin=true;
        }
        this.buttonFlag=this.authenticationService.checkLogIn();
        this.username=sessionStorage.getItem('username');
        if(this.username!=null)
            this.username=this.username.toUpperCase();
  }

  logout() {
    this.authenticationService.logout();
    this.buttonFlag=this.authenticationService.checkLogIn();
  }

}

import { Component, OnInit } from '@angular/core';
import { User} from '../../models/user';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {


  user: any = new User("","",0,"","","",new Date(), "user");

  message:any;

  constructor(private service:RegisterService, private router: Router) { }  
  
  ngOnInit() {  
   
  }  

  public registerNow(){
    let resp =  this.service.doRegistration(this.user);
    resp.subscribe((data: any) => this.message = data);
    // this.router.navigate(["login"]);
  }


}

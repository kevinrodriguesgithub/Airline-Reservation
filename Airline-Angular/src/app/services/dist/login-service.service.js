"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.loginUser = exports.MyserviceService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var MyserviceService = /** @class */ (function () {
    function MyserviceService(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.apiUrl = 'http://localhost:8080/Airline/users';
    }
    MyserviceService.prototype.setUserList = function (list) {
        this.userList = list;
    };
    MyserviceService.prototype.getUserList = function () {
        return this.userList;
    };
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
    MyserviceService.prototype.loginUser = function (adduser) {
        console.log("ins service add");
        console.log(adduser);
        sessionStorage.setItem('username', adduser.email);
        console.log("session item username set as:" + adduser.email);
        // sessionStorage.setItem('email', adduser.pwd);
        var headers = new http_1.HttpHeaders().set('Content_Type', 'text ;charset=utf-8');
        return this.httpService.post("" + this.apiUrl + '/logincheck', adduser);
    };
    MyserviceService.prototype.checkLogIn = function () {
        var user = sessionStorage.getItem('username');
        if (user == null) {
            return false;
        }
        else {
            return true;
        }
    };
    MyserviceService.prototype.logout = function () {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('userid');
        sessionStorage.removeItem('flightid');
        this.router.navigate(["/"]);
    };
    MyserviceService.prototype.updateUser = function (updateuser) {
        console.log("ins service add");
        console.log(updateuser);
        var headers = new http_1.HttpHeaders().set('Content_Type', 'application/json ;charset=utf-8');
        return this.httpService.post("" + this.apiUrl + '/resetpwd', updateuser, { headers: headers, responseType: 'text' });
    };
    MyserviceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MyserviceService);
    return MyserviceService;
}());
exports.MyserviceService = MyserviceService;
var loginUser = /** @class */ (function () {
    function loginUser() {
    }
    return loginUser;
}());
exports.loginUser = loginUser;

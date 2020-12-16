"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthenticationService = void 0;
var core_1 = require("@angular/core");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8080/Airline/users';
    }
    AuthenticationService.prototype.authenticate = function (username, password) {
        return this.http.post("" + this.apiUrl + '/logincheck', { username: username, password: password }).subscribe(function (data) {
            sessionStorage.setItem('username', username);
            var tokenStr = 'TokenHolder' + data.token;
            sessionStorage.setItem('token', tokenStr);
            return data;
        });
    };
    AuthenticationService.prototype.checkLogIn = function () {
        var user = sessionStorage.getItem('username');
        if (user == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthenticationService.prototype.logout = function () {
        sessionStorage.removeItem('username');
    };
    AuthenticationService.prototype.getRole = function (username) {
        return this.http.get("" + this.apiUrl + '/getRole?username=' + username);
    };
    AuthenticationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;

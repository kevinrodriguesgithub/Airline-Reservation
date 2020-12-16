"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Passenger = exports.PassengerserviceService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var PassengerserviceService = /** @class */ (function () {
    function PassengerserviceService(httpService) {
        this.httpService = httpService;
    }
    PassengerserviceService.prototype.addPassenger = function (addPassenger) {
        console.log(addPassenger);
        var headers = new http_1.HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
        return this.httpService.post("http://localhost:8080/Airline/passengers/createPassenger", addPassenger, { headers: headers, responseType: 'text' });
    };
    PassengerserviceService.prototype.getPassenger = function (user_id) {
        var headers = new http_1.HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
        return this.httpService.get("http://localhost:8080/Airline/passengers/GetPassengerByUserId/" + user_id);
    };
    PassengerserviceService.prototype["delete"] = function (id) {
        var headers = new http_1.HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
        return this.httpService["delete"]("http://localhost:8080/Airline/passengers/deletePassenger/" + id, { headers: headers, responseType: 'text' });
    };
    PassengerserviceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PassengerserviceService);
    return PassengerserviceService;
}());
exports.PassengerserviceService = PassengerserviceService;
var Passenger = /** @class */ (function () {
    function Passenger() {
    }
    return Passenger;
}());
exports.Passenger = Passenger;

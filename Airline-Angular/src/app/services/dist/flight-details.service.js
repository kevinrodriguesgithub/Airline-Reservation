"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FlightDetailsService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var FlightDetailsService = /** @class */ (function () {
    function FlightDetailsService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/Airline/fd';
    }
    FlightDetailsService.prototype.getFlightById = function (id) {
        return this.http.get("" + this.baseUrl + '/flight/' + id);
    };
    FlightDetailsService.prototype.getFlightDetailsByTicket = function (ticket) {
        console.log(ticket);
        console.log(this.http.get("" + this.baseUrl + "/fdetailticket?ticket='" + ticket + "'"));
        return this.http.get("" + this.baseUrl + "/fdetailticket?ticket='" + ticket + "'");
    };
    FlightDetailsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FlightDetailsService);
    return FlightDetailsService;
}());
exports.FlightDetailsService = FlightDetailsService;

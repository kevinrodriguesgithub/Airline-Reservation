"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FlightService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var FlightService = /** @class */ (function () {
    function FlightService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/Airline/flights';
    }
    FlightService.prototype.addFlight = function (flight) {
        console.log(this.http.post("" + this.baseUrl + 'AddFlight', flight));
        return this.http.post("" + this.baseUrl + 'AddFlight', flight);
    };
    FlightService.prototype.getAllFlight = function () {
        console.log(this.http.get("" + this.baseUrl + '/GetAllFlights'));
        return this.http.get("" + this.baseUrl + '/GetAllFlights');
    };
    FlightService.prototype.viewFlight = function (map) {
        return this.http.post("" + this.baseUrl + '/ViewFlight', map);
    };
    FlightService.prototype.deleteFlightById = function (id) {
        console.log(this.http["delete"]("" + this.baseUrl + '/DeleteFlight/' + id));
        return this.http["delete"]("" + this.baseUrl + '/DeleteFlight/' + id);
    };
    FlightService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FlightService);
    return FlightService;
}());
exports.FlightService = FlightService;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Flight = exports.AirserviceService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var AirserviceService = /** @class */ (function () {
    function AirserviceService(httpService) {
        this.httpService = httpService;
        this.apiUrl = "http://localhost:8080/Airline/flights";
        // alert("flightList value:" + this.flightList);
    }
    AirserviceService.prototype.addFlight = function (addFlight) {
        console.log(addFlight);
        var headers = new http_1.HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
        return this.httpService.post("http://localhost:8080/Airline/flights/AddFlight", addFlight, { headers: headers, responseType: 'text' });
    };
    AirserviceService.prototype.setFlightList = function (list) {
        this.flightList = list;
    };
    AirserviceService.prototype.getFlightList = function () {
        return this.flightList;
    };
    AirserviceService.prototype.getFlight = function () {
        var headers = new http_1.HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
        return this.httpService.get("http://localhost:8080/Airline/flights/GetAllFlights");
    };
    AirserviceService.prototype["delete"] = function (id) {
        var headers = new http_1.HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
        return this.httpService["delete"]("http://localhost:8080/Airline/flights/DeleteFlight/" + id, { headers: headers, responseType: 'text' });
    };
    AirserviceService.prototype.searchFlight = function (srch) {
        console.log("search service called");
        console.log(srch);
        var headers = new http_1.HttpHeaders().set('Content_Type', 'text ;charset=utf-8');
        return this.httpService.post("" + this.apiUrl + '/search', srch);
    };
    AirserviceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AirserviceService);
    return AirserviceService;
}());
exports.AirserviceService = AirserviceService;
var Flight = /** @class */ (function () {
    function Flight() {
    }
    return Flight;
}());
exports.Flight = Flight;

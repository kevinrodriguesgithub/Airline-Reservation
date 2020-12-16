"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FlightListComponent = void 0;
var core_1 = require("@angular/core");
var FlightListComponent = /** @class */ (function () {
    function FlightListComponent(flightService, router) {
        this.flightService = flightService;
        this.router = router;
        this.admin = false;
        this.user = false;
        this.flightList = [];
    }
    FlightListComponent.prototype.ngOnInit = function () {
        this.sessionParam = sessionStorage.getItem('role');
        if (this.sessionParam == 'admin') {
            this.admin = true;
            this.loadFlights();
        }
        else if (this.sessionParam == 'user' || this.sessionParam == null) {
            this.user = true;
        }
    };
    FlightListComponent.prototype.loadFlights = function () {
        var _this = this;
        this.flightService.getAllFlight().subscribe(function (data) {
            _this.flightList = data;
            console.log(_this.flightList);
        });
    };
    FlightListComponent = __decorate([
        core_1.Component({
            selector: 'flight-list',
            templateUrl: 'flights.component.html'
        })
    ], FlightListComponent);
    return FlightListComponent;
}());
exports.FlightListComponent = FlightListComponent;

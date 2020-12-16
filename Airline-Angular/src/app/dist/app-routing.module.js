"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var flights_component_1 = require("./components/flights/flights.component");
var flight_details_component_1 = require("./components/flight-details/flight-details/flight-details.component");
var payment_component_1 = require("./components/payment/payment.component");
var register_component_1 = require("./components/register/register.component");
var login_comp_1 = require("./components/login-comp/login-comp");
var add_flight_component_1 = require("./components/flights/add-flight/add-flight.component");
var delete_flight_component_1 = require("./components/flights/delete-flight/delete-flight.component");
var add_passenger_component_1 = require("./components/passenger/add-passenger/add-passenger.component");
var cancel_passenger_component_1 = require("./components/passenger/cancel-passenger/cancel-passenger.component");
var search_flight_component_1 = require("./components/flights/search-flight/search-flight.component");
var search_result_component_1 = require("./components/flights/search-result/search-result.component");
var routes = [
    { path: 'flights', component: flights_component_1.FlightListComponent },
    { path: 'flight-details', component: flight_details_component_1.FlightDetailsComponent },
    { path: 'payment', component: payment_component_1.PaymentComponent },
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_comp_1.LoginComponent },
    { path: 'addFlight', component: add_flight_component_1.AddFlightComponent },
    { path: 'DelFlight', component: delete_flight_component_1.DeleteFlightComponent },
    { path: 'addPassenger', component: add_passenger_component_1.AddPassengerComponent },
    { path: 'getPassenger', component: cancel_passenger_component_1.CancelPassengerComponent },
    { path: 'searchFlight', component: search_flight_component_1.SearchFlightComponent },
    { path: 'searchResults', component: search_result_component_1.SearchResultComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

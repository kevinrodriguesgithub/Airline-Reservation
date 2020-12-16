"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var mycomponent_component_1 = require("./components/mycomponent.component");
var topnav_component_1 = require("./components/topnav.component");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var flights_component_1 = require("./components/flights/flights.component");
var add_flight_component_1 = require("./components/flights/add-flight/add-flight.component");
var delete_flight_component_1 = require("./components/flights/delete-flight/delete-flight.component");
var flight_details_component_1 = require("./components/flight-details/flight-details/flight-details.component");
var forms_1 = require("@angular/forms");
var payment_component_1 = require("./components/payment/payment.component");
var register_component_1 = require("./components/register/register.component");
var login_comp_1 = require("./components/login-comp/login-comp");
var header_component_1 = require("./components/header/header.component");
var footer_component_1 = require("./components/footer/footer.component");
var add_passenger_component_1 = require("./components/passenger/add-passenger/add-passenger.component");
var cancel_passenger_component_1 = require("./components/passenger/cancel-passenger/cancel-passenger.component");
var search_flight_component_1 = require("./components/flights/search-flight/search-flight.component");
var search_result_component_1 = require("./components/flights/search-result/search-result.component");
var airservice_service_1 = require("./services/airservice.service");
var custom_pipe_pipe_1 = require("./custom-pipe.pipe");
var login_service_service_1 = require("./services/login-service.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                mycomponent_component_1.MyComponent,
                topnav_component_1.TopNav,
                flights_component_1.FlightListComponent,
                add_flight_component_1.AddFlightComponent,
                flight_details_component_1.FlightDetailsComponent,
                payment_component_1.PaymentComponent,
                register_component_1.RegisterComponent,
                login_comp_1.LoginComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                delete_flight_component_1.DeleteFlightComponent,
                add_passenger_component_1.AddPassengerComponent,
                cancel_passenger_component_1.CancelPassengerComponent,
                search_flight_component_1.SearchFlightComponent,
                search_result_component_1.SearchResultComponent,
                custom_pipe_pipe_1.CustomPipePipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [airservice_service_1.AirserviceService, login_service_service_1.MyserviceService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

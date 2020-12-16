"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SearchFlightComponent = void 0;
var core_1 = require("@angular/core");
var SearchFlightComponent = /** @class */ (function () {
    function SearchFlightComponent(myservice, router) {
        this.myservice = myservice;
        this.router = router;
        this.admin = false;
        this.user = false;
    }
    SearchFlightComponent.prototype.ngOnInit = function () {
        this.sessionParam = sessionStorage.getItem('role');
        if (this.sessionParam == 'admin') {
            this.admin = true;
        }
        else if (this.sessionParam == 'user' || this.sessionParam == null) {
            this.user = true;
        }
    };
    SearchFlightComponent.prototype.onSubmit = function (adduser) {
        var _this = this;
        console.log(adduser);
        console.log(adduser.from_loc);
        console.log(adduser.to_loc);
        this.myservice.searchFlight(adduser).subscribe(function (data) {
            _this.flightList = data;
            console.log("flightList:" + _this.flightList);
            _this.myservice.setFlightList(_this.flightList);
        });
        setTimeout(function () { return _this.router.navigate(['/searchResults']); }, 2500);
    };
    SearchFlightComponent.prototype.getFlightList = function () {
        return this.flightList;
    };
    SearchFlightComponent = __decorate([
        core_1.Component({
            selector: 'app-search-flight',
            templateUrl: './search-flight.component.html',
            styles: []
        })
    ], SearchFlightComponent);
    return SearchFlightComponent;
}());
exports.SearchFlightComponent = SearchFlightComponent;

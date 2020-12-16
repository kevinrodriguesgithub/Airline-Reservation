"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddFlightComponent = void 0;
var core_1 = require("@angular/core");
var AddFlightComponent = /** @class */ (function () {
    function AddFlightComponent(airservice, router) {
        this.airservice = airservice;
        this.router = router;
        this.admin = false;
        this.user = false;
    }
    AddFlightComponent.prototype.ngOnInit = function () {
        this.sessionParam = sessionStorage.getItem('role');
        if (this.sessionParam == 'admin') {
            this.admin = true;
        }
        else if (this.sessionParam == 'user' || this.sessionParam == null) {
            this.user = true;
        }
    };
    AddFlightComponent.prototype.onSubmit = function (addFlight) {
        var _this = this;
        console.log(addFlight);
        this.airservice.addFlight(addFlight).subscribe(function (data) {
            _this.message = data;
        });
        alert("Flight Added Successfully");
        this.router.navigate(['/flights']);
    };
    AddFlightComponent = __decorate([
        core_1.Component({
            selector: 'app-add-flight',
            templateUrl: './add-flight.component.html',
            styleUrls: ['./add-flight.component.css']
        })
    ], AddFlightComponent);
    return AddFlightComponent;
}());
exports.AddFlightComponent = AddFlightComponent;

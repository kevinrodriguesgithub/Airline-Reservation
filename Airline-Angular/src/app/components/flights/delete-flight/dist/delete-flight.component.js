"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DeleteFlightComponent = void 0;
var core_1 = require("@angular/core");
var DeleteFlightComponent = /** @class */ (function () {
    function DeleteFlightComponent(airservice, router) {
        this.airservice = airservice;
        this.router = router;
        this.admin = false;
        this.user = false;
    }
    DeleteFlightComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionParam = sessionStorage.getItem('role');
        if (this.sessionParam == 'admin') {
            this.admin = true;
            this.airservice.getFlight().subscribe(function (response) { return _this.handleSuccessfulResponse(response); });
        }
        else if (this.sessionParam == 'user' || this.sessionParam == null) {
            this.user = true;
        }
    };
    DeleteFlightComponent.prototype.handleSuccessfulResponse = function (response) {
        this.flight = response;
    };
    DeleteFlightComponent.prototype["delete"] = function (deleteFlight) {
        var _this = this;
        this.airservice["delete"](deleteFlight.id).subscribe(function (data) { _this.message = data; });
        this.flight.splice(this.flight.indexOf(deleteFlight), 1);
        alert("Flight Deleted");
        this.router.navigate(['/flights']);
    };
    DeleteFlightComponent = __decorate([
        core_1.Component({
            selector: 'app-delete-flight',
            templateUrl: './delete-flight.component.html',
            styleUrls: ['./delete-flight.component.css']
        })
    ], DeleteFlightComponent);
    return DeleteFlightComponent;
}());
exports.DeleteFlightComponent = DeleteFlightComponent;

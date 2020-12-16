"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CancelPassengerComponent = void 0;
var core_1 = require("@angular/core");
var CancelPassengerComponent = /** @class */ (function () {
    function CancelPassengerComponent(passservice, router) {
        this.passservice = passservice;
        this.router = router;
        this.user_id = "";
        this.passenger = [];
        this.search = false;
        this.PassengerList = [];
    }
    CancelPassengerComponent.prototype.refill = function () {
        this.passenger = [];
        this.search = false;
        this.user_id = "";
    };
    CancelPassengerComponent.prototype.handleSuccessfulResponse = function (response) {
        this.passenger = response;
    };
    CancelPassengerComponent.prototype.PassSearch = function (delPass) {
        var _this = this;
        this.search = true;
        this.passservice.getPassenger(delPass.user_id).subscribe(function (response) { return _this.handleSuccessfulResponse(response); });
        console.log(delPass);
        for (var i = 0; i < this.PassengerList.length; i++) {
            if (this.PassengerList[i].user_id == delPass.user_id) {
                this.passenger.push(this.PassengerList[i]);
            }
        }
    };
    CancelPassengerComponent.prototype["delete"] = function (deletePass) {
        var _this = this;
        this.passservice["delete"](deletePass.id).subscribe(function (data) { _this.message = data; });
        this.passenger.splice(this.passenger.indexOf(deletePass), 1);
        alert("Ticket Cancelled");
    };
    CancelPassengerComponent.prototype.ngOnInit = function () { };
    CancelPassengerComponent = __decorate([
        core_1.Component({
            selector: 'app-cancel-passenger',
            templateUrl: './cancel-passenger.component.html',
            styleUrls: ['./cancel-passenger.component.css']
        })
    ], CancelPassengerComponent);
    return CancelPassengerComponent;
}());
exports.CancelPassengerComponent = CancelPassengerComponent;

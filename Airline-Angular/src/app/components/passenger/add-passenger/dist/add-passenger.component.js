"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddPassengerComponent = void 0;
var core_1 = require("@angular/core");
var AddPassengerComponent = /** @class */ (function () {
    function AddPassengerComponent(passservice, router) {
        this.passservice = passservice;
        this.router = router;
        this.count = 3;
        this.c = 1;
        this.btn = false;
    }
    AddPassengerComponent.prototype.ngOnInit = function () {
        this.userId = sessionStorage.getItem('userid');
        this.flightId = sessionStorage.getItem('flightid');
        console.log("userid in add passenger" + this.userId);
        console.log("flightid in add passenger" + this.flightId);
    };
    AddPassengerComponent.prototype.onSubmit = function (addPassenger) {
        console.log(addPassenger);
        this.passservice.addPassenger(addPassenger).subscribe(function (data) {
        });
        alert(String(this.c) + " Passenger added");
        if (this.onSubmit && this.count != 1) {
            this.count -= 1;
            this.c++;
            console.log(this.count);
        }
        else {
            console.log("Cannot add more Passengers");
            this.btn = true;
            document.getElementById('submit').innerHTML = "cannot add more Passengers";
            document.getElementById('submit').setAttribute("disabled", "disabled");
            alert("All Passengers have been added");
        }
    };
    AddPassengerComponent = __decorate([
        core_1.Component({
            selector: 'app-add-passenger',
            templateUrl: './add-passenger.component.html',
            styleUrls: ['./add-passenger.component.css']
        })
    ], AddPassengerComponent);
    return AddPassengerComponent;
}());
exports.AddPassengerComponent = AddPassengerComponent;

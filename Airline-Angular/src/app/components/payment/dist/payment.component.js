"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaymentComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var Payment_1 = require("src/app/models/Payment");
var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(payService) {
        this.payService = payService;
        this.payment = new Payment_1.Payment();
        this.submitted = false;
        this.today = new Date();
        this.jstoday = '';
        this.jstoday = common_1.formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent.prototype.newPayment = function () {
        this.submitted = false;
        this.payment = new Payment_1.Payment();
    };
    PaymentComponent.prototype.save = function () {
        this.payService.makePayment(this.payment).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.payment = new Payment_1.Payment();
        console.log("Payment successful" + this.payment);
    };
    PaymentComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.save();
    };
    PaymentComponent = __decorate([
        core_1.Component({
            selector: 'app-payment',
            templateUrl: './payment.component.html',
            styles: []
        })
    ], PaymentComponent);
    return PaymentComponent;
}());
exports.PaymentComponent = PaymentComponent;

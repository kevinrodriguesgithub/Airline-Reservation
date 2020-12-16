import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IPayment } from 'src/app/models/IPayment';
import { Payment } from 'src/app/models/Payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styles: [
  ]
})
export class PaymentComponent implements OnInit {

  payment: Payment = new Payment();
  submitted: boolean = false;
  today= new Date();
  jstoday = '';

  constructor(private payService: PaymentService) {
    this.jstoday = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
   }

  ngOnInit(): void {
  }

  newPayment(){
    this.submitted = false;
    this.payment = new Payment();
  }

  save() {
    this.payService.makePayment(this.payment).subscribe(data => console.log(data), error => console.log(error));
    this.payment = new Payment();
    console.log("Payment successful" + this.payment);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}

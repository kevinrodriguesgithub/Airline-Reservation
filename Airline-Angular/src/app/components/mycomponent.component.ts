import { Component } from '@angular/core';

@Component({
  selector: 'my-comp',
  templateUrl: 'mycomponent.component.html',
  styles: []
})
export class MyComponent{
  productName : string;
  public category : string;
  public cost : number;

  //no overloading allowed
  constructor() {
    this.productName = 'First';
    this.category = 'Books';
    this.cost = 100;
  }


  changeValue(newCost) {
    this.cost = newCost;
  }

}
import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/Models/Customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customer: Customer;
  constructor() { }

  ngOnInit() {
  }

  customerSelectedEvent(customer: Customer) {
    this.customer = customer;
  }

}

import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, ViewChild, ElementRef, Output } from '@angular/core';
import { ClientServiceService } from 'src/app/Services/client-service.service';
import { Customer } from 'src/Models/Customers';
import { EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.scss']
})
export class EditCustomersComponent implements OnInit, OnChanges {

  @Output() saveEvent = new EventEmitter();

  @Input() customerEdit: Customer;
  registerForm: FormGroup;
  submitted = false;

  constructor(private service: ClientServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', Validators.required]
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (!changes.customerEdit.firstChange) {
      this.registerForm.patchValue({
        firstName: changes.customerEdit.currentValue[0].FirstName,
        lastName: changes.customerEdit.currentValue[0].LastName,
        country: changes.customerEdit.currentValue[0].Country
      });
    }

  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    const customer: Customer = {
      Id: this.customerEdit[0].Id,
      FirstName: this.f.firstName.value,
      LastName: this.f.lastName.value,
      Country: this.f.country.value
    };
    this.service.updaterCustomer(this.customerEdit[0].Id, customer)
      .subscribe(data => this.saveEvent.emit(null));
  }


}

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
        firstName: changes.customerEdit.currentValue.firstName,
        lastName: changes.customerEdit.currentValue.lastName,
        country: changes.customerEdit.currentValue.country
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
      id: this.customerEdit.id,
      firstName: this.f.firstName.value,
      lastName: this.f.lastName.value,
      country: this.f.country.value
    };
    this.service.updaterCustomer(this.customerEdit.id, customer)
      .subscribe(data => this.saveEvent.emit(null));
  }


}

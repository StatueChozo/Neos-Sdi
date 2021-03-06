import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ClientServiceService } from 'src/app/Services/client-service.service';
import { Customer } from 'src/Models/Customers';

@Component({
  selector: 'app-grid-customers',
  templateUrl: './grid-customers.component.html',
  styleUrls: ['./grid-customers.component.scss']
})
export class GridCustomersComponent implements OnInit {
  public pagedData: PagedItems<Customer>;
  public pageSize = 10;
  public page = 1;

  @Output() customerSelected = new EventEmitter<Customer>();

  constructor(private service: ClientServiceService) { }

  ngOnInit() {
    this.loadPage();
  }

  public loadPage() {
    this.service.getCustomers(this.pageSize, this.page).subscribe(c => {

      this.pagedData = c;
      console.log(c.items);
    });
  }

  clickEdit(customer: Customer) {
    this.customerSelected.emit(customer);
  }
}

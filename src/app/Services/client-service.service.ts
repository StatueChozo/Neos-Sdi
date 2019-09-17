import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/Models/Customers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http: HttpClient) { }

  getCustomers(pageSize: number, currentPage: number): Observable<PagedItems<Customer>> {
    const apiCustomer = environment.apiBaseUrl + '?StartIndex=' + (currentPage - 1) * pageSize + '&NumberItems=' + pageSize;
    return this.http.get<PagedItems<Customer>>(apiCustomer);
  }

  getCustomerById(id: number = 1): Observable<Customer> {
    const api = environment.apiBaseUrl + 'GetCustomerById?customerId=' + id;
    return this.http.get<Customer>(api);
  }

  updaterCustomer(id: number, customer: Customer) {
    const api = environment.apiBaseUrl + '?customerId=' + id;
    return this.http.put(api, customer);
  }

  getOrder(id: number): Observable<Order[]> {
    const api = environment.apiCommandesUrl + '?customerId=' + id;
    return this.http.get<Order[]>(api);
  }

  deleteOrder(id: number) {
    const api = environment.apiCommandesUrl + '?customerId=' + id;
    return this.http.delete(api);
  }
}

import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/Services/client-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss'],
})
export class CommandesComponent implements OnInit {

  customerId: string;
  orderData: Order[];
  customerData: any[];
  totalCustomer: number;

  constructor(private service: ClientServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.service.getCustomers(1, 1).subscribe(c => {

      this.totalCustomer = c.itemsCount,

        this.service.getCustomers(this.totalCustomer, 1).subscribe(customers => {

          this.customerData = customers.items;

        });

    });
    this.orderLoad();
  }

  orderLoad() {

    this.route.queryParamMap.subscribe(queryParams => {
      this.customerId = queryParams.get('customerId'),

        this.service.getOrder(Number(this.customerId)).subscribe(order => {

          this.orderData = order;

        });

    });
  }

  delete(orderId: number) {
    if (window.confirm('Voulez vous supprimer cette commande ?')) {
      this.service.deleteOrder(orderId).subscribe(data => {

        console.log(data);
        this.orderLoad();
      });
    }
  }

  selectedCustomer(customerId: number) {
    this.router.navigate(['/Commande'], {queryParams: {customerId}});
  }
}

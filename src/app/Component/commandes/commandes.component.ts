import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/Services/client-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


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

  constructor(private service: ClientServiceService, private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit() {

    this.service.getCustomers(-1, 1).subscribe(customers => {

      this.customerData = customers.items,
        this.totalCustomer = customers.itemsCount;

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
    this.service.deleteOrder(orderId).subscribe(data => {

      console.log(data);
      this.orderLoad();
    });
  }

  selectedCustomer(customerId: number) {
    this.router.navigate(['/Commande'], { queryParams: { customerId } });
  }

  openModalTemplate(content, orderId: number) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.delete(orderId);
    }, (reason) => {
      console.log('No');
    });
  }
}

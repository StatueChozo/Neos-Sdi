import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalContentComponent } from '../modal/confirm-modal-content.component';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html',
  styleUrls: ['./modal-test.component.scss']
})
export class ModalTestComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  openModalComponent() {
    const modalRef = this.modalService.open(ConfirmModalContentComponent);
    modalRef.componentInstance.name = 'World';
  }

  openModalTemplate(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log('Yes');
    }, (reason) => {
      console.log('No');
    });
  }

  ngOnInit() {
  }

}

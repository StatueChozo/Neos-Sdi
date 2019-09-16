import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmModalContentComponent } from './confirm-modal-content.component';

describe('ModalComponent', () => {
  let component: ConfirmModalContentComponent;
  let fixture: ComponentFixture<ConfirmModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

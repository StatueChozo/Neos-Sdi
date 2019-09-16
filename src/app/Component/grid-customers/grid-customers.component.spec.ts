import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCustomersComponent } from './grid-customers.component';

describe('GridCustomersComponent', () => {
  let component: GridCustomersComponent;
  let fixture: ComponentFixture<GridCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

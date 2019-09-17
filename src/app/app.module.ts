import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CustomersComponent } from './Component/customers/customers.component';
import { GridCustomersComponent } from './Component/grid-customers/grid-customers.component';
import { EditCustomersComponent } from './Component/edit-customers/edit-customers.component';
import { CommandesComponent } from './Component/commandes/commandes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    GridCustomersComponent,
    EditCustomersComponent,
    CommandesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

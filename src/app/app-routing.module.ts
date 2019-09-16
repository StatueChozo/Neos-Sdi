import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './Component/customers/customers.component';
import { CommandesComponent } from './Component/commandes/commandes.component';
import { ModalTestComponent } from './Component/modal-test/modal-test.component';

const routes: Routes = [
  { path: 'Client', component: CustomersComponent },
  { path: 'Commande',      component: CommandesComponent },
  { path: 'Modal',      component: ModalTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

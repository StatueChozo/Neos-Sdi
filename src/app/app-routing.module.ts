import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './Component/customers/customers.component';
import { CommandesComponent } from './Component/commandes/commandes.component';

const routes: Routes = [
  { path: 'Client', component: CustomersComponent },
  { path: 'Commande', component: CommandesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

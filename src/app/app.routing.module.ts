import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersRoutingModule } from './customers/customers.routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  },
  {
    path: 'customers',
    loadChildren: 'app/customers/customers.routing.module#CustomersRoutingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

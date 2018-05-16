import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersModule } from './customers.module';
import { CustomersComponentContainer } from './containers/customers/customers.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponentContainer
  }
];

@NgModule({
  imports: [CustomersModule.forRoot(), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

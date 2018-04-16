import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { CustomersComponentContainer } from './containers/customers/customers.component';
import { CustomersComponent } from './components/customers/customers.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CustomersComponentContainer,
    CustomersComponent
  ]
})

export class CustomersModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CustomersModule,
      providers: [
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CustomersModule) {
    if (parentModule) {
      throw new Error(
        'CustomersModule is already loaded. Import it in the AppModule only');
    }
  }
}

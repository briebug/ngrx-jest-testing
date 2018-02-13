import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { reducer } from './customers/reducers/customer';
import { CustomersComponent } from './customers/components/customers/customers.component';

@NgModule({
  declarations: [AppComponent, CustomersComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducer),
    StoreDevtoolsModule.instrument({
      name: 'Customers DevTools',
      logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

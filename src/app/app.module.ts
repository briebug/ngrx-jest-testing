import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '@state/app.interfaces';
import { getAllCustomers } from '@state/customer';
import { Load } from '@state/customer/customer.actions';
import { Customer } from '@state/customer/customer.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-customers-container',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponentContainer implements OnInit {
  customers$: Observable<Customer[]>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new Load());
  }

  ngOnInit() {
    this.customers$ = this.store.pipe(select(getAllCustomers));
  }
}

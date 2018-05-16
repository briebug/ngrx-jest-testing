import { Component, OnInit, Input } from '@angular/core';
import { CustomerActions } from '@state/customer/customer.actions';
import { Customer } from '@state/customer/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  @Input() customers: Customer[];

  constructor() { }

  ngOnInit() { }
}

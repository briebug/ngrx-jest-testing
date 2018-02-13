import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Customer } from '../models/customer';

@Injectable()
export class CustomersService {
  private API_PATH = '/api/customers';

  constructor(private http: HttpClient) {}

  load(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_PATH);
  }
}

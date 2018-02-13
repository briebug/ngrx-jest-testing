import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {
  CustomerActionTypes,
  Load,
  LoadSuccess,
  LoadFail
} from '../actions/customer';

import { Customer } from '../models/customer';
import { map, switchMap, catchError } from 'rxjs/operators';
import { CustomersService } from '../services/customers';

@Injectable()
export class CustomerEffects {
  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType<Load>(CustomerActionTypes.Load),
    switchMap(query => {
      return this.customersService
        .load()
        .pipe(
          map((customers: Customer[]) => new LoadSuccess(customers)),
          catchError(err => of(new LoadFail(err)))
        );
    })
  );

  constructor(
    private actions$: Actions,
    private customersService: CustomersService
  ) {}
}

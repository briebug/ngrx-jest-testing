import { Injectable } from '@angular/core';
import { CustomersService } from '@core/services/customer.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  CustomerActionTypes,
  Load,
  LoadFail,
  LoadSuccess
} from './customer.actions';
import { Customer } from './customer.model';

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

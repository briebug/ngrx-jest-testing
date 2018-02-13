import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';

import { cold, hot } from 'jasmine-marbles';
import { empty } from 'rxjs/observable/empty';
import { CustomerEffects } from './customer';
import { CustomersService } from '../services/customers';
import { Observable } from 'rxjs/Observable';
import { Load, LoadSuccess, LoadFail } from '../actions/customer';
import { Customer } from '../models/customer';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('CustomerEffects', () => {
  let effects: CustomerEffects;
  let actions$: TestActions;
  let customersService: any;

  const customer1 = { id: 1, name: 'User 1' } as Customer,
    customer2 = { id: 2, name: 'User 2' } as Customer,
    customers = [customer1, customer2];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CustomerEffects,
        {
          provide: CustomersService,
          useValue: { load: jest.fn() }
        },
        {
          provide: Actions,
          useFactory: getActions
        }
      ]
    });

    effects = TestBed.get(CustomerEffects);
    customersService = TestBed.get(CustomersService);
    actions$ = TestBed.get(Actions);
  });

  describe('load$', () => {
    it('should return a new customer.LoadSuccess, with the customers, on success', () => {
      const action = new Load(),
        completion = new LoadSuccess(customers),
        response = cold('a|', { a: customers }),
        expected = cold('-b', { b: completion });

      actions$.stream = hot('-a', { a: action });

      // mock the load function to be the response
      customersService.load = jest.fn(() => response);

      expect(effects.load$).toBeObservable(expected);
    });

    it('should return a new customer.LoadError, on fail', () => {
      const action = new Load(),
        completion = new LoadFail('error'),
        response = cold('#'),
        expected = cold('-b', { b: completion });

      actions$.stream = hot('-a', { a: action });

      // mock the load function to be the response
      customersService.load = jest.fn(() => response);

      expect(effects.load$).toBeObservable(expected);
    });
  });
});

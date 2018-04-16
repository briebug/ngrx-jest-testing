import { Action } from '@ngrx/store';
import { Customer } from './customer.model';

export enum CustomerActionTypes {
  Load = '[Customer] Load',
  LoadSuccess = '[Customer] Load Success',
  LoadFail = '[Customer] Load Fail',
  Select = '[Customer] Select'
}

export class Load implements Action {
  readonly type = CustomerActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = CustomerActionTypes.LoadSuccess;

  constructor(public payload: Customer[]) {}
}

export class LoadFail implements Action {
  readonly type = CustomerActionTypes.LoadFail;

  constructor(public error: any) {}
}

export class Select implements Action {
  readonly type = CustomerActionTypes.Select;

  constructor(public payload: Customer) {}
}

export type CustomerActions = Load | LoadSuccess | LoadFail | Select;

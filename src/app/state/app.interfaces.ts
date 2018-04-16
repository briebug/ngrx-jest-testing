import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './shared/utils';
import { State as customerState } from '@state/customer/customer.reducer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  customer: customerState;
}

export type State = AppState;

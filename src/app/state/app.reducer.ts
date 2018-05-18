import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'environments/environment';
import { AppState } from './app.interfaces';
import { reducer as customerReducer } from '@state/customer/customer.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
  customer: customerReducer
};

export const appMetaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze]
  : [];

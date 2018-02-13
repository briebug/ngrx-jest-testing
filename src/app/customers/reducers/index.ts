import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromCustomers from './customer';

export interface CustomersState {
  customers: fromCustomers.State;
}

export const reducers = {
  customers: fromCustomers.reducer
};

export const getCustomersState = createFeatureSelector<CustomersState>(
  'customers'
);

export const getCustomerEntitiesState = createSelector(
  getCustomersState,
  state => state.customers
);

export const getSelectedCustomerId = createSelector(
  getCustomerEntitiesState,
  fromCustomers.getSelectedId
);

export const {
  selectIds: getCustomerIds,
  selectEntities: getCustomerEntities,
  selectAll: getAllCustomers,
  selectTotal: getTotalCustomers
} = fromCustomers.adapter.getSelectors(getCustomerEntitiesState);

export const getSelectedCustomer = createSelector(
  getCustomerEntities,
  getSelectedCustomerId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

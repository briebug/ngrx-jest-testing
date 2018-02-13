import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Customer } from '../models/customer';
import { CustomerActions, CustomerActionTypes } from '../actions/customer';

export interface State extends EntityState<Customer> {
  selectedCustomerId: number | null;
  loading: boolean;
  error: any;
}

export const adapter: EntityAdapter<Customer> = createEntityAdapter<Customer>();

export const initialState: State = adapter.getInitialState({
  selectedCustomerId: null,
  loading: false,
  error: null
});

export function reducer(state = initialState, action: CustomerActions): State {
  switch (action.type) {
    case CustomerActionTypes.Load:
      return { ...state, loading: true, selectedCustomerId: null };

    case CustomerActionTypes.LoadSuccess: {
      return { ...adapter.addMany(action.payload, state) };
    }

    case CustomerActionTypes.LoadFail: {
      return { ...state, error: { message: 'Error loading customers' } };
    }

    case CustomerActionTypes.Select: {
      return {
        ...state,
        selectedCustomerId: action.payload.id
      };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedCustomerId;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;

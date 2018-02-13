import { reducer } from './customer';
import * as fromCustomers from './customer';
import { Load, LoadSuccess, LoadFail, Select } from '../actions/customer';
import { Customer } from '../models/customer';

describe('CustomersReducer', () => {
  const initialState: fromCustomers.State = {
      ids: [],
      entities: {},
      loading: false,
      selectedCustomerId: null,
      error: null
    },
    customers = [{ id: 1, name: 'Test User' }],
    customer = customers[0];

  describe('undefined action', () => {
    it('should return the default state', () => {
      const result = reducer(undefined, {} as any);

      expect(result).toMatchSnapshot();
    });
  });

  describe('Load Customers Action', () => {
    test('should set loading to true', () => {
      const action = new Load(),
        result = reducer(initialState, action);

      expect(result).toMatchSnapshot();
      expect(fromCustomers.getLoading(result)).toBe(true);
    });
  });

  describe('Load Customers Success Action', () => {
    test('should add customers to state', () => {
      const action = new LoadSuccess(customers),
        result = reducer(initialState, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('Load Customers Fail Action', () => {
    test('should add error to state', () => {
      const action = new LoadFail({ status: 1 }),
        result = reducer(initialState, action),
        error = { message: 'Error loading customers' };

      expect(result).toMatchSnapshot();
      expect(fromCustomers.getError(result)).toEqual(error);
    });
  });

  describe('Customer Select Action', () => {
    test('should set selectedCustomerId', () => {
      const action = new Select(customer),
        result = reducer(initialState, action);

      expect(result).toMatchSnapshot();
      expect(fromCustomers.getSelectedId(result)).toEqual(customer.id);
    });
  });
});

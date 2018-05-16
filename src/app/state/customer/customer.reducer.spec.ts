import { reducer } from './customer.reducer';
import * as fromCustomers from './customer.reducer';
import * as selectors from '.';
import { Load, LoadSuccess, LoadFail, Select } from './customer.actions';
import { Customer } from './customer.model';

describe('CustomersReducer', () => {
  const initialState: fromCustomers.State = {
    ids: [],
    entities: {},
    loading: false,
    selectedCustomerId: null,
    error: null
  },
    customers = [
      { id: 1, name: 'test1' },
      { id: 2, name: 'test2' },
      { id: 3, name: 'test3' }
    ],
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
        error = 'Error loading customers';

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

  describe('GetSelectedCustomer selector', () => {
    test('should select customer', () => {
      const action = new LoadSuccess(customers);
      let result = reducer(initialState, action);

      result = reducer(result, new Select(customer));

      expect(selectors.getSelectedCustomer.projector(result.entities, result.selectedCustomerId)).toMatchSnapshot();
    });
  });
});

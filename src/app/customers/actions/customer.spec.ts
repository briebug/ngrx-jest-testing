import * as CustomerActions from './customer';
import { Customer } from '../models/customer';

describe('Customer Actions', () => {
  const customer = <Customer>{ id: 1, name: 'Test User' };

  describe('Load Customers', () => {
    test('should create Customer Load Action', () => {
      const action = new CustomerActions.Load();
      expect(action.type).toBe('[Customer] Load');
    });
  });

  describe('Load Customers Success', () => {
    test('should create Customer Load Success Action', () => {
      const payload = <Customer[]>[customer],
        action = new CustomerActions.LoadSuccess(payload);

      expect(action.type).toBe('[Customer] Load Success');
      expect(action.payload).toBe(payload);
    });
  });

  describe('Load Customers Success', () => {
    test('should create Customer Load Fail Action', () => {
      const error = { status: 1, error: 'Error loading customer' },
        action = new CustomerActions.LoadFail(error);

      expect(action.type).toBe('[Customer] Load Fail');
      expect(action.error).toBe(error);
    });
  });

  describe('Customer Select', () => {
    test('should set payload to customer', () => {
      const action = new CustomerActions.Select(customer);

      expect(action.type).toBe('[Customer] Select');
      expect(action.payload).toBe(customer);
    });

    test('should set customer to payload in snapshot', () => {
      const action = new CustomerActions.Select(customer);

      expect(action.payload).toMatchSnapshot();
    });
  });
});

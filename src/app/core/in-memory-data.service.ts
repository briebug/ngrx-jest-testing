import { Customer } from '@state/customer/customer.model';

export class InMemoryDataService {
  createDb() {
    const customers = [
      { id: 1, name: 'Bob Newman' } as Customer,
      { id: 2, name: 'Homer Simpson' } as Customer,
      { id: 3, name: 'Tom Slick' } as Customer,
      { id: 4, name: 'Jane Doe' } as Customer
    ];

    return { customers };
  }
}

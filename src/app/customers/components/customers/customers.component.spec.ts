import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { configureTests, ConfigureFn } from '../../../../test-config.helper'

import { Customer } from '@state/customer/customer.model';
import { CustomersComponent } from './customers.component';

describe('CustomersComponent', () => {
  let component: CustomersComponent,
    fixture: ComponentFixture<CustomersComponent>;

  const customers = [
      { id: 1, name: 'test1' },
      { id: 2, name: 'test2' },
      { id: 3, name: 'test3' }
    ];

  beforeEach(
    async(() => {
      const configure: ConfigureFn = testBed => {
        testBed.configureTestingModule({
          declarations: [
            CustomersComponent
          ]
        });
      };

      configureTests(configure).then(testBed => {
        fixture = testBed.createComponent(CustomersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    })
  );

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('renders customers markup to snapshot', () => {
    component.customers = customers;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});

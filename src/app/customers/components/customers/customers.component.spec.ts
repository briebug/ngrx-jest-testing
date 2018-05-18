import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { hot } from 'jasmine-marbles';
import { configureTests, ConfigureFn } from '../../../../test-config.helper'
import { Customer } from '@state/customer/customer.model';
import { CustomersComponent } from './customers.component';

describe('CustomersComponent', () => {
  let component: CustomersComponent,
    fixture: ComponentFixture<CustomersComponent>,
    customers = [
      { id: 1, name: 'test1' },
      { id: 2, name: 'test2' },
      { id: 3, name: 'test3' }
    ];

  beforeEach(
    async(() => {
      const configure: ConfigureFn = testBed => {
        testBed.configureTestingModule({
          declarations: [CustomersComponent],
          providers: [
            {
              provide: Store,
              useValue: {
                dispatch: jest.fn(),
                pipe: jest.fn(() => hot('-a', { a: customers }))
              }
            }
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

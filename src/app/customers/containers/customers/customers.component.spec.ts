import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { hot } from 'jasmine-marbles';
import { of } from 'rxjs/observable/of';
import { configureTests, ConfigureFn } from '../../../../test-config.helper'
import { CustomersComponentContainer } from './customers.component';
import { CustomersComponent } from '../../components/customers/customers.component';

describe('CustomersComponentContainer', () => {
  let component: CustomersComponentContainer,
    fixture: ComponentFixture<CustomersComponentContainer>,
    customers = [
      { id: 1, name: 'test1' },
      { id: 2, name: 'test2' },
      { id: 3, name: 'test3' }
    ];

  beforeEach(
    async(() => {
      const configure: ConfigureFn = testBed => {
        testBed.configureTestingModule({
          declarations: [
            CustomersComponentContainer,
            CustomersComponent
          ],
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
        fixture = testBed.createComponent(CustomersComponentContainer);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    })
  );

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('renders markup to snapshot', () => {
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});

import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { configureTests, ConfigureFn } from '../test-config.helper'

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>,
    app: AppComponent;

  beforeEach(
    async(() => {
      const configure: ConfigureFn = testBed => {
        testBed.configureTestingModule({
          declarations: [
            AppComponent
          ]
        });
      };

      configureTests(configure).then(testBed => {
        fixture = testBed.createComponent(AppComponent);
        app = fixture.componentInstance;
        fixture.detectChanges();
      });
    })
  );

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));

  it('should render html', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled).toMatchSnapshot();
  }));
});

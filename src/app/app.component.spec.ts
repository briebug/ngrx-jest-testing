import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { configureTests, ConfigureFn } from '../test-config.helper'
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>,
    app: AppComponent;

  beforeEach(
    async(() => {
      const configure: ConfigureFn = testBed => {
        testBed.configureTestingModule({
          declarations: [AppComponent],
          imports: [RouterTestingModule]
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

  it('should render html', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled).toMatchSnapshot();
  }));
});

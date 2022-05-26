import { UnitService } from './unit.service';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, ParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let target: AppComponent;
  let router: Router;
  let location: Location;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{
          path: 'prova/:routingParam',
          component: AppComponent
        }])
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        // Location
    ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'blog'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('blog');
  });



  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('blog app is running!');
  });

  fit('says hello', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.addValue('1');
    app.addValue('2')

    expect(app.arr.length).toBeLessThanOrEqual(5);
  });

  
  fit('should manage routing', async () => {
    router = TestBed.inject(Router);
    // location = TestBed.inject(Location);

    let route = TestBed.inject(ActivatedRoute);
    route.url = of([
      { path: 'prova', parameters: {id: '123'}, parameterMap: convertToParamMap({ query: 'active' }) },
    ]);
    // const navigationResult = await router.navigate(['prova', '1000'], {queryParams: {queryParam: '2000'}});
    // expect(navigationResult).toBeTrue();

    // fixture.detectChanges();
console.log(route.snapshot.params,'dgsdr');

    // expect(target.queryParam).toEqual('2000');
    // expect(location.path()).toEqual('/prova/1000?queryParam=2000');
    // expect(target.routingParam).toEqual('1000');
  });
});

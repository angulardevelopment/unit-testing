import { UnitService } from './unit.service';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, NavigationEnd, ParamMap, Router, RouterEvent } from '@angular/router';
import { of, ReplaySubject, Subject } from 'rxjs';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let router: Router;
  let location: Location;
  const routerMock = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      //   RouterTestingModule.withRoutes(
      //     [{
      //     path: 'prova/:routingParam',
      //     component: AppComponent
      //   }
      // ])
      RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        // Location
        // {provide: Router, useValue: routerMock}
        {provide: ActivatedRoute,
        useValue: {
          params: {},
          firstChild: ''
        }},
      ]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {

    expect(component).toBeTruthy();
  });

  it(`should have as title 'blog'`, () => {
    expect(component.title).toEqual('blog');
  });



  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('blog app is running!');
  });

  fit('says hello', () => {
    component['addValue']('1');
console.log(component.arr, 'fgc');

    // expect(component.arr.length).toBeLessThanOrEqual(5);
  });


  it('should manage routing', async () => {
    router = TestBed.inject(Router);
    // location = TestBed.inject(Location);

    let route = TestBed.inject(ActivatedRoute);
    route.url = of([
      { path: 'prova', parameters: { id: '123' }, parameterMap: convertToParamMap({ query: 'active' }) },
    ]);
    // const navigationResult = await router.navigate(['prova', '1000'], {queryParams: {queryParam: '2000'}});
    // expect(navigationResult).toBeTrue();

    // fixture.detectChanges();
    console.log(route.snapshot.params, 'dgsdr');

    // expect(target.queryParam).toEqual('2000');
    // expect(location.path()).toEqual('/prova/1000?queryParam=2000');
    // expect(target.routingParam).toEqual('1000');
  });

  it('says hello', () => {
    // const event = new NavigationEnd(42, '/', '/');
    // const events = new Subject<{}>();
    // events.next('Result of pipe')
    const router = TestBed.inject(Router);
    spyOn(router.events, 'pipe').and.returnValue(of(new NavigationEnd(0, 'http://localhost:4200/#/non-pdp/phases/8', 'http://localhost:4200/#/non-pdp/phases/8')));
    // let route = TestBed.inject(ActivatedRoute);
    // route.url = of([
    //   { path: 'prova', parameters: { id: '123' }, parameterMap: convertToParamMap({ query: 'active' }), firstChild:'dfvd' },
    // ]);
    component.df();

    // expect(app.arr.length).toBeLessThanOrEqual(5);
  });
});

// export class Tes extends AppComponent{
//   private addValue(val: string) {
//     this.arr.push(val);
//   }
// }
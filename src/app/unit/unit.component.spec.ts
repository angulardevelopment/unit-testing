import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  UnitComponent,
  User,
  compute,
  getCurrencies,
  greet,
} from './unit.component';
import { By } from '@angular/platform-browser';
import { UnitService } from '../unit.service';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';

describe('UnitComponent', () => {
  let component: UnitComponent;
  let fixture: ComponentFixture<UnitComponent>;
  let submitEl: DebugElement;

  let loginEl: DebugElement;

  let passwordEl: DebugElement;
  let inputEl: DebugElement;
  let mockData = { x: 3, y: 4 };
  beforeEach(async () => {
    const serviceSpy= jasmine.createSpyObj('UnitService', ['saveValue']);
    serviceSpy.saveValue.and.returnValue(of([mockData]));

    await TestBed.configureTestingModule({
      declarations: [UnitComponent],
      providers: [
        {provide: UnitService, useValue: serviceSpy}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitComponent);
    component = fixture.componentInstance;
    submitEl = fixture.debugElement.query(By.css('button'));

    loginEl = fixture.debugElement.query(By.css('input[type=email]'));

    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
    inputEl = fixture.debugElement.query(By.css('input'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should include the name in message - Testing strings', () => {
    expect(greet('mosh')).toContain('mosh');
  });

  it('Testing arrays-should return the supported currencies', () => {
    const result = getCurrencies();

    expect(result).toContain('USD');

    expect(result).toContain('AUD');

    expect(result).toContain('EUR');
  });

  fit('should test string', () => {
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement; // The HTML reference

    expect(compiled.textContent).toContain('blog app is running!');
  });

  fit('should Test css classes', () => {
    fixture.detectChanges();

    const compileTag = fixture.debugElement.nativeElement;

    const compiled = fixture.debugElement.query(By.css('.thumbnail'))
      .nativeElement as HTMLElement;

    expect(compiled.classList).toContain('testClass');

    expect(compiled.classList).not.toContain('visited-class');

    expect(compileTag.querySelector('h1').textContent).toContain('hello');
  });

  it('should return 0 if input is negative', () => {
    const result = compute(-1);

    expect(result).toBe(0);
  });

  it('should increment the input if it is positive', () => {
    const result = compute(1);

    expect(result).toBe(2);
  });

  it('should increment totalvalues when upvoted', () => {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalvalues when downvoted', () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });

  fit('should Test class global properties', () => {
    const app = fixture.componentInstance; // The component instantiation

    expect(app.title).toEqual('blog');
  });

  xit('shouls test length ', () => {
    const app = fixture.componentInstance;

    app.addValue('1');

    app.removeValue();

    expect(app.arr.length).toBeLessThan(1);
  });

  fit('test toBeGreaterThanOrEqual', () => {
    const app = fixture.componentInstance;

    const text = 'This is my first post';

    app.addValue(text);

    expect(app.arr.length).toBeGreaterThanOrEqual(1);
  });

  fit('should test click', () => {
    const app = fixture.componentInstance;

    spyOn(app, 'removeValue');

    const el = fixture.debugElement.query(By.css('button')).nativeElement;

    el.click();

    expect(app.removeValue).toHaveBeenCalledTimes(0);
  });

  xit('method attached to the click-', () => {
    const app = fixture.componentInstance;

    spyOn(app, 'removeValue');

    let btn = fixture.debugElement.query(By.css('button'));

    btn.triggerEventHandler('click', null);

    expect(app.removeValue).toHaveBeenCalled();
  });

  xit('says hello', () => {
    const app = fixture.componentInstance;

    const service = TestBed.get(UnitService);

    const spyOnMethod = spyOn(service, 'save').and.callThrough();

    app.removeValue();

    expect(spyOnMethod).toHaveBeenCalled();
  });

  fit('says hello', () => {
    const app = fixture.componentInstance;

    const service = TestBed.get(UnitService);

    spyOn(app, 'updateValue');

    app.updateValue('c');

    expect(app.updateValue).toHaveBeenCalledWith('c');
  });

  fit('says hello', () => {
    const app = fixture.componentInstance;

    app.addValue('1');

    app.addValue('2');

    expect(app.arr.length).toBeLessThanOrEqual(5);
  });

  it('Setting enabled to false disabled the submit button', () => {
    component.enabled = false;

    fixture.detectChanges();

    expect(submitEl.nativeElement.disabled).toBeTruthy();
  });

  it('Setting enabled to true enables the submit button', () => {
    component.enabled = true;

    fixture.detectChanges();

    expect(submitEl.nativeElement.disabled).toBeFalsy();
  });

  it('Entering email and password emits loggedIn event', () => {
    let user: User;

    loginEl.nativeElement.value = 'test@example.com';

    passwordEl.nativeElement.value = '123456';

    // Subscribe to the Observable and store the user in a local variable.

    component.loggedIn.subscribe((value) => (user = value));

    // This sync emits the event and the subscribe callback gets executed above

    submitEl.triggerEventHandler('click', null);

    // Now we can check to make sure the emitted value is correct

    expect(user.email).toBe('test@example.com');

    expect(user.password).toBe('123456');
  });

  it('hovering over input', () => {
    inputEl.triggerEventHandler('mouseover', null);

    fixture.detectChanges();

    expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');

    inputEl.triggerEventHandler('mouseout', null);

    // component.inputElement = {

    //         nativeElement: jasmine.createSpyObj('nativeElement', ['focus'])

    //     }

    fixture.detectChanges();

    expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  });

  it('should check session storage', async () => {
    let store = {};

    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },

      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },

      removeItem: (key: string) => {
        delete store[key];
      },

      clear: () => {
        store = {};
      },
    };

    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);

    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);

    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);

    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);

    // expect(component).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnitService {
  constructor() {}

  save() {
    console.log('hi');
  }

  saveValue(): Observable<any> {
    console.log('hi');
    return of({});
  }
}

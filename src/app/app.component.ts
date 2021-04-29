import { Component } from '@angular/core';
import { UnitService } from './unit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  arr : string[] = [];

  constructor(public unit: UnitService) {

  }
  addValue(val: string) {
this.arr.push(val);
  }

  removeValue () {
    this.arr.pop();
this.unit.save();
  }

  updateValue(val: string) {

  }
}

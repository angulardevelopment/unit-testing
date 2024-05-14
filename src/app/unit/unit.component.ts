import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
})
export class UnitComponent implements OnInit {
  title = 'blog';
  constructor(public unit: UnitService) {}

  ngOnInit(): void {}

  totalVotes = 0;

  upVote() {
    this.totalVotes++;
  }

  downVote() {
    this.totalVotes--;
  }

  arr: string[] = [];

  addValue(val: string) {
    this.arr.push(val);
  }

  removeValue() {
    this.arr.pop();
    this.unit.save();
  }

  updateValue(val: string) {}

  @Output() loggedIn = new EventEmitter<User>();

  @Input() enabled = true;

  login(email, password) {
    console.log(`Login ${email} ${password}`);

    if (email && password) {
      console.log(`Emitting`);

      this.loggedIn.emit(new User(email, password));
    }
  }
}

export function greet(name) {
  return 'welcome' + name;
}

export function getCurrencies() {
  return ['USD', 'AUD', 'EUR'];
}

export function compute(number) {
  if (number < 0) return 0;

  return number + 1;
}

export class User {
  constructor(public email: string, public password: string) {}
}

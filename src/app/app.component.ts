import { Component } from '@angular/core';
import { UnitService } from './unit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'blog';
  arr : string[] = [];


  addValue(val: string) {
this.arr.push(val);
  }

  removeValue () {
    this.arr.pop();
this.unit.save();
  }

  updateValue(val: string) {

  }

  
  constructor(private readonly activatedRoute: ActivatedRoute, public unit: UnitService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // this.routingParam = params['routingParam'];
    });

    this.activatedRoute.queryParams.subscribe( queryParams => {
      // this.queryParam = queryParams['queryParam'];
    });
  }
}

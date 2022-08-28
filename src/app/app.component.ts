import { Component } from '@angular/core';
import { UnitService } from './unit.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'blog';
  arr: string[] = [];
  constructor(private activatedRoute: ActivatedRoute, public unit: UnitService,  private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // this.routingParam = params['routingParam'];
    });

    this.activatedRoute.queryParams.subscribe(queryParams => {
      // this.queryParam = queryParams['queryParam'];
    });
  }

  private addValue(val: string) {
    this.arr.push(val);
  }

  removeValue() {
    this.arr.pop();
    this.unit.save();
  }

  updateValue(val: string) {

  }

  df(){
    this.router.events.pipe()
      .subscribe(route => {
        if (route instanceof NavigationEnd) {
          console.log(this.activatedRoute.firstChild, 'route');
          
        // debugger
          // this.projectType = route.url.match(/[a-z-]+/)[0];
        }
      });
  }


  
}

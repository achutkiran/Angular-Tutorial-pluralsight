import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <app-toolbar></app-toolbar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}

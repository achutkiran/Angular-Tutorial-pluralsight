import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';

const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']}, //present in app.module.ts
  { path: 'events', component: EventsListComponent, resolve:{events:EventListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] }, // /events/1 or /events/2
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

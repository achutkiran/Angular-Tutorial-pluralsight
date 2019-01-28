import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { AppToolbar } from './toolbar/toolbar.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'

// Services
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service';
import { EventRouteActivator } from './events/event-details/event-route-activator.service'

// Angular material
import { MatToolbarModule } from '@angular/material/toolbar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    AppToolbar,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [EventService,ToastrService, EventRouteActivator],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateSessionComponent } from './events/event-details/create-session.component'
import { SessionListComponent } from './events/event-details/session-list.component'
import { CollapsibleCardComponent } from './common/collapsible-card.component'
import { AppToolbar } from './toolbar/toolbar.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { SearchDialog } from './common/search-dialog.component'
import { HttpClientModule } from '@angular/common/http'

// Services
import { EventService } from './events/shared/event.service'
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { EventResolver } from './events/event-resolver.service'
import { EventListResolver } from './events/events-list-resolver.service'
import { AuthService } from './user/auth.service'
import { VoterService } from './events/event-details/voter.service'

// Pipes
import { DurationPipe } from './events/shared/duration.pipe'

// Directives
import { HighlightDirective } from './common/highlight.directive'
import { LocationValidator } from './events/location-validator.directive'

// Angular material
import { MatToolbarModule } from '@angular/material/toolbar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';


//js global objects
let toastr:Toastr = window['toastr'];


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    AppToolbar,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleCardComponent,
    DurationPipe,
    SearchDialog,
    HighlightDirective,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatDialogModule
  ],
  entryComponents: [
    SearchDialog
  ],
  providers: [
    EventService, //or { provide: EventService, useValue: EventService}
    VoterService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    }, 
    EventListResolver,
    EventResolver,
    AuthService,
    { 
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    } //or you can use servcie
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty){
    return window.confirm('you have not saved this event, do you really want to cancel?')
  }
  return true
}
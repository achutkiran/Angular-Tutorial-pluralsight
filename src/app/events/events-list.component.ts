import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';

@Component({
    selector: 'events-list',
    templateUrl:'./events-list.component.html'
})

export class EventsListComponent implements OnInit{
  events:IEvent[]
  constructor (private route: ActivatedRoute, private toastr: ToastrService) {

  }  

  ngOnInit(){
    this.events = this.route.snapshot.data['events']
  }

}
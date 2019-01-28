import { Component, Input, EventEmitter, Output } from '@angular/core'
import { IEvent } from './shared/event.model';

@Component({
    selector: 'event-thumbnail',
    templateUrl:'./event-thumbnail.component.html',
    styles: [`
        .pad-left { margin-left:10px; }
        .green { color: green; }
        .bold { font-weight: bold; }
    `]
})

export class EventThumbnailComponent {
    @Input() event: IEvent
    
    getStartTimeClass(){
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        return {
            green: isEarlyStart,
            bold: isEarlyStart
        }
        /* or
        if (isEarlyStart)
            return 'green bold'
        return '' 
        or
        if (isEarlyStart)
            return ['green','bold']
        return []*/
       
    }
    getStartTimeStyle(){
        if (this.event && this.event.time === '8:00 am')
            return {
                color: 'green',
                'font-weight': 'bold'
            }
        return {}
       
    }
}
import { Component, Input, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    templateUrl:'./event-thumbnail.component.html'
})

export class EventThumbnailComponent {
    @Input() event: any
    // @Output() eventClick = new EventEmitter()

    // handleClick(){
    //     this.eventClick.emit(this.event.name)
    // }
}
import { Component, Input, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    templateUrl:'./event-thumbnail.component.html',
    styles: [`
        .pad-left { margin-left:10px; }
        .green { color: green; }
    `]
})

export class EventThumbnailComponent {
    @Input() event: any
}
import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl:'./events-list.component.html'
})

export class EventsListComponent{
    event1 ={
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00am',
        price: 599.99,
        imgeUrl: 'assets/images/Google.png',
        location: {
            address: '057 Dt',
            city: 'London',
            country: 'England'
        }
    }

}
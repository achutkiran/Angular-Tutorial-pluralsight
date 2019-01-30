import { Component, ɵConsole } from "@angular/core";
import { AuthService } from '../user/auth.service';
import { EventService } from '../events/shared/event.service';
import { ISession } from '../events/shared/event.model';


@Component({
    selector: 'app-toolbar',
    templateUrl:'./toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})

export class AppToolbar {
    public searchResults:ISession[]
    constructor(public authService:AuthService, private eventService:EventService) { }

    searchSessions(searchTerm: string){
        this.eventService.searchSessions(searchTerm).subscribe((searchResult) =>{
            this.searchResults = searchResult
            console.log(searchResult)
        })
    }

}
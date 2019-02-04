import { Component, ɵConsole } from "@angular/core";
import { AuthService } from '../user/auth.service';
import { EventService } from '../events/shared/event.service';
import { ISession } from '../events/shared/event.model';
import { MatDialog } from '@angular/material/dialog';
import { SearchDialog } from '../common/search-dialog.component';


@Component({
    selector: 'app-toolbar',
    templateUrl:'./toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})

export class AppToolbar {
    public searchResults:ISession[]
    constructor(public authService:AuthService, private eventService:EventService, public dialog: MatDialog) { }

    searchSessions(searchTerm: string){
        this.eventService.searchSessions(searchTerm).subscribe((searchResult) =>{
            this.searchResults = searchResult
            this.dialog.open(SearchDialog, {
                width: '500px',
                data: this.searchResults
            })
        })
    }

}
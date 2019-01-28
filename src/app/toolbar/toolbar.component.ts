import { Component } from "@angular/core";
import { AuthService } from '../user/auth.service';


@Component({
    selector: 'app-toolbar',
    templateUrl:'./toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})

export class AppToolbar {
    constructor(public authService:AuthService) { }

}
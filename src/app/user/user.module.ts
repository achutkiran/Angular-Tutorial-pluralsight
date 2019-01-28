import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { userRoutingModule } from './user-routing.module';

// Angular material
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    imports: [
        CommonModule,
        userRoutingModule,
        MatButtonModule
    ],
    declarations: [
        ProfileComponent
    ],
    providers: [

    ]
})
export class UserModule { }
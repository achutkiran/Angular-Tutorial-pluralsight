import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';
import { userRoutingModule } from './user-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

// Angular material
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
    imports: [
        CommonModule,
        userRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [

    ]
})
export class UserModule { }
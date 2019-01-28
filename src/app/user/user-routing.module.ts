import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';

 
const routes: Routes = [
    {path: 'profile',component: ProfileComponent}, // /user/profile
    {path:"login", component:LoginComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class userRoutingModule { }
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';

 
const routes: Routes = [
    {path: 'profile',component: ProfileComponent} // /user/profile
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class userRoutingModule { }
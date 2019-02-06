import { Component, Input } from "@angular/core";

@Component({
    selector:'collapsible-card',
    template:`
        <mat-card-header (click)="toggleContent()" style="cursor:pointer;">
            <mat-card-title>{{title}}</mat-card-title>
            <mat-card-subtitle *ngIf="visible">{{subtitle}}</mat-card-subtitle>
        </mat-card-header>
        <ng-content *ngIf="visible"></ng-content>  
    `
})

export class CollapsibleCardComponent{
    @Input() title:string
    @Input() subtitle:string
    visible: boolean = true

    toggleContent(){
        this.visible = !this.visible
    }
}
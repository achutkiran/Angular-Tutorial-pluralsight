import { Component, Input } from "@angular/core";

@Component({
    selector:'collapsible-card',
    template:`
        <mat-card-header (click)="toggleContent()" style="cursor:pointer;">
            <span>
                <ng-content select=".cardTitle"></ng-content>
                <ng-content select="mat-card-subtitle"></ng-content>
            </span>
        </mat-card-header>
        <ng-content select="[cardContent]" *ngIf="visible"></ng-content>  
    `
})

export class CollapsibleCardComponent{
    visible: boolean = true

    toggleContent(){
        this.visible = !this.visible
    }
}
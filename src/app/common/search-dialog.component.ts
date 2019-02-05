import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISession } from '../events/shared/event.model';

@Component({
    selector: 'search-dialog',
    templateUrl: './search-dialog.component.html'
})

export class SearchDialog {
    constructor (
        public dialogRef: MatDialogRef<SearchDialog>,
        @Inject(MAT_DIALOG_DATA) public data: ISession[]
    ) { }

    close(){
        this.dialogRef.close()
    }
    open(id:number){
        this.dialogRef.close(id)
    }
}
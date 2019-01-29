import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession } from '../shared/event.model';
import { restrictedWords } from '../shared/restricted-words.validator';

@Component({
    templateUrl:'./create-session.component.html',
    styles:[`
        .flexForm {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    `]
})

export class CreateSessionComponent implements OnInit {
    newSessionForm: FormGroup
    name: FormControl
    duration: FormControl
    presenter: FormControl
    level: FormControl
    abstract: FormControl
    ngOnInit(){
        this.name = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('',[Validators.required, Validators.maxLength(400), restrictedWords(['foo','bar'])])
        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    saveSession(formValues){
        let session:ISession ={
            name: formValues.name,
            duration: parseInt(formValues.duration),
            level: formValues.level,
            presenter: formValues.presenter,
            abstract: formValues.abstract,
            id: undefined,
            voters: []
        }
    }
}
import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[highlight]'
})

export class HighlightDirective implements OnInit {
    private element: HTMLInputElement;
    
    constructor(private elRef: ElementRef){
        this.element =  elRef.nativeElement
    }

    ngOnInit(){
        this.element.addEventListener('mouseover',e =>{
            this.element.style.boxShadow = 
                ` 0 8px 10px 1px rgba(0,0,0,0.14), 
                  0 3px 14px 2px rgba(0,0,0,0.12), 
                  0 5px 5px -3px rgba(0,0,0,0.20)
                `
            this.element.style.backgroundColor = 'yellow'
        })
        this.element.addEventListener('mouseout', e =>{
            this.element.style.boxShadow = 
                ` 0 2px 1px 1px rgba(0,0,0,0.2),
                  0 1px 1px 0 rgba(0,0,0,0.14),
                  0 1px 3px 0 rgba(0,0,0,0.12)
                `
            this.element.style.backgroundColor = "white"
        })
    }
}
import { Directive, ElementRef, OnInit, Input, HostListener, HostBinding, SecurityContext } from "@angular/core";
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { NgStyle } from '@angular/common';

@Directive({
    selector: '[highlight]'
})

export class HighlightDirective {
    private element: HTMLInputElement;
    @Input('highlight') color: string;
    // @Input() highlight:string 
    
    @HostBinding('style.backgroundColor') private bgColor: string;
    @HostBinding('style.boxShadow') private boxShadow: SafeStyle;

    @HostListener('mouseenter') onMouseEnter(){
        this.boxShadow = this.santizer.bypassSecurityTrustStyle("0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20)")
        this.bgColor = this.color
    }

    @HostListener('mouseleave') onMouseLeave() {
        
        this.boxShadow = this.santizer.bypassSecurityTrustStyle(` 0 2px 1px 1px rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.12)`)
        this.bgColor = 'white'
    }
    constructor(private santizer: DomSanitizer) { }

}
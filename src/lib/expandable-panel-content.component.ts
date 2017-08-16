import { Component, Input, Output, ElementRef, OnInit, EventEmitter } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

@Component({
    selector: 'expandable-panel-content',
    template: `
        <div class="content">
            <ng-content></ng-content>
        </div>
    `
})
export class ExpandablePanelContentComponent {

    private myElement: ElementRef;
    public height: number;

    constructor(myElement : ElementRef) {
        this.myElement = myElement;
    }

    ngAfterViewInit(){
        this.height = this.myElement.nativeElement.querySelector('.content').clientHeight;
    }

}
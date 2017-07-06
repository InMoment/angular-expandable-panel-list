import { Component, Input, Output, ElementRef, OnInit, EventEmitter } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

@Component({
    selector: 'expandable-panel-title',
    template: `
        <div class="title" md-ripple (click)="handleClick()">
            <ng-content></ng-content>
        </div>
    `
})
export class ExpandablePanelTitleComponent {

    @Output() clicked = new EventEmitter();

    constructor() {

    }

    public handleClick() {
        this.clicked.emit(true);
    }

}
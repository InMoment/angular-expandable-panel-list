import { Component, Input, Output, ElementRef, OnInit, EventEmitter } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

@Component({
    selector: 'expandable-panel-expander',
    template: `
        <div #icon><ng-content></ng-content></div>
        <mat-icon *ngIf="icon.children.length == 0">keyboard_arrow_down</mat-icon>
    `
})
export class ExpandablePanelExpanderComponent {

    @Input() open = false;
    @Input() iconClass = 'keyboard_arrow_down';

    constructor() {

    }

}
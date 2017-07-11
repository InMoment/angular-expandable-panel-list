import { Component, Input, Output, ElementRef, OnInit, EventEmitter } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

@Component({
    selector: 'expandable-panel-expander',
    template: `
        <md-icon [class.open]="open">{{iconClass}}</md-icon>
    `
})
export class ExpandablePanelExpanderComponent {

    @Input() open = false;
    @Input() iconClass = 'keyboard_arrow_down';

    constructor() {

    }

}
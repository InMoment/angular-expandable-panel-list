import { Component, ContentChildren, QueryList, Input, OnInit, ElementRef } from '@angular/core';

import { ExpandablePanelComponent } from './expandable-panel.component';

@Component({
    selector: 'expandable-panel-list',
    template: `
    <div class="expandable-panel-container" [class.open]="open" [class.mobile]="mobile" (window:resize)="onResize($event)">
        <ng-content></ng-content>
    </div>
    `
})
export class ExpandablePanelListComponent {

    @Input() changeWidth = 768;

    @ContentChildren(ExpandablePanelComponent) _panels: QueryList<ExpandablePanelComponent>;

    public open = false;
    public mobile = true;
    private myElement: ElementRef;

    constructor(myElement: ElementRef) {}

    ngAfterViewInit() {
        this._panels.forEach(panel => {
            panel.status.subscribe((open: boolean) => {
                this.open = open;
            });
        });
        setTimeout(() => this.checkWidth(window.innerWidth));
    }

    onResize(event:any) {
        this.checkWidth(event.target.innerWidth);
    }

    checkWidth(width:number) {
        if(width > this.changeWidth) {
            this.mobile = false;
        } else {
            this.mobile = true;
        }
    }

}
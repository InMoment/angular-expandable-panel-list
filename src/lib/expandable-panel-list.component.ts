import { Component, ContentChildren, QueryList, Input, OnInit, ElementRef } from '@angular/core';

import { ExpandablePanelComponent } from './expandable-panel.component';

@Component({
    selector: 'expandable-panel-list',
    template: `
    <div class="expandable-panel-container" [class.open]="open">
        <ng-content></ng-content>
    </div>
    `
})
export class ExpandablePanelListComponent {

    @Input() changeWidth = 768;

    @ContentChildren(ExpandablePanelComponent) _panels: QueryList<ExpandablePanelComponent>;

    private open = false;
    private myElement: ElementRef;

    constructor(myElement: ElementRef) {
        console.log(this._panels);
    }

    ngOnInit() {
        console.log(this._panels);
    }

    ngAfterViewInit() {
        console.log(this._panels);
        this._panels.forEach(panel => {
            panel.status.subscribe((event: boolean) => {
                this.open = event;
            });
        });
    }

}
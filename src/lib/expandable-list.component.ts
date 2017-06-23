import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ExpandablePanelComponent } from './expandable-panel.component';

@Component({
    selector: 'expandable-list',
    template: `
    <ul class="expandable-list-container">
        <li *ngFor="let item of items" (click)="selectItem(item)">
            {{item.title}}
        </li>
    </ul>
    `
})
export class ExpandableListComponent {

    @Input() items: ExpandablePanelComponent[];

    @Output() selected = new EventEmitter();

    selectItem(item: ExpandablePanelComponent) {
        this.selected.emit(item);
        console.log(item);
    }

}
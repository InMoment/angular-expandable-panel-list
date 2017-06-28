import { Component, ContentChildren, QueryList, Input } from '@angular/core';

import { ExpandablePanelComponent } from './expandable-panel.component';

@Component({
    selector: 'expandable-panel-list',
    template: `
    <div class="expandable-panel-container">
        <expandable-list [items]="_panels"></expandable-list>
        <ng-content></ng-content>
    </div>
    `
})
export class ExpandablePanelListComponent {

    @Input() changeWidth = 768;

    @ContentChildren(ExpandablePanelComponent) _panels: QueryList<ExpandablePanelComponent>;

}
import { Component } from '@angular/core';

@Component({
    selector: 'collapsible-panel-list',
    template: `
    <div class="collapsible-panel-container">
        <ng-content></ng-content>
    </div>
    `
})
export class CollapsiblePanelListComponent {}
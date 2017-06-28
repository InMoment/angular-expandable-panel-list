import { Component, Input } from '@angular/core';

@Component({
    selector: 'expandable-panel',
    template: `
    <div class="expandable-panel" [class.open]="open">
        <md-expansion-panel [expanded]="open" (closed)="closed()">
            <md-expansion-panel-header>{{ title }}</md-expansion-panel-header>
            <ng-content></ng-content>
        </md-expansion-panel>
    </div>
    `
})
export class ExpandablePanelComponent {

    @Input() title: string;

    @Input() open: boolean;

    closed() {
        this.open = false;
    }

}
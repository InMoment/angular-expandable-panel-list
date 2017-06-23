import { Component, Input } from '@angular/core';

@Component({
    selector: 'expandable-panel',
    template: `
    <md-expansion-panel>
        <md-expansion-panel-header>{{ title }}</md-expansion-panel-header>
        <ng-content></ng-content>
    </md-expansion-panel>
    `
})
export class ExpandablePanelComponent {

    @Input() title: string;

}
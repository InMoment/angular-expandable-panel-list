import { Component, Input } from '@angular/core';

@Component({
    selector: 'collapsible-panel-list-toggle',
    template: `
    <div class="accordion-toggle">
        {{title}}
    </div>
    `
})
export class CollapsiblePanelListToggleComponent {

    @Input() title: string;

}
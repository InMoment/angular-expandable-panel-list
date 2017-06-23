import { Component, Input } from '@angular/core';

@Component({
    selector: 'collapsible-panel',
    template: `
    <div class="accordion-item">

    </div>
    `
})
export class CollapsiblePanelComponent {

    @Input() title: string;

}
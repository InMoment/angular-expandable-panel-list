import { Component, Input } from '@angular/core';

@Component({
    selector: 'accordionToggle',
    template: `
    <div class="accordion-toggle">
        {{title}}
    </div>
    `
})
export class AccordionItemComponent {

    @Input() title: string;

}
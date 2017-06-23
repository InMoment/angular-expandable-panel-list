import { Component, Input } from '@angular/core';

@Component({
    selector: 'accordionItem',
    template: `
    <div class="accordion-item">

    </div>
    `
})
export class AccordionItemComponent {

    @Input() title: string;

}
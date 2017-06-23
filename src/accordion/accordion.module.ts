import { NgModule } from '@angular/core';

import { MdExpansionPanel } from '@angular/material';

import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item.component';

export { AccordionComponent } from './accordion.component';
export { AccordionItemComponent } from './accordion-item.component';

@NgModule({
    imports: [ MdExpansionPanel ],
    declarations: [ AccordionComponent, AccordionItemComponent ],
    exports: [ AccordionComponent, AccordionItemComponent ]
})
export class AccordionModule { }
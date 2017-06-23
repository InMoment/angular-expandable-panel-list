import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdExpansionModule } from '@angular/material';

import { ExpandablePanelListComponent } from './expandable-panel-list.component';
import { ExpandablePanelComponent } from './expandable-panel.component';
import { ExpandableListComponent } from './expandable-list.component';

export { ExpandablePanelListComponent } from './expandable-panel-list.component';
export { ExpandablePanelComponent } from './expandable-panel.component';
export { ExpandableListComponent } from './expandable-list.component';

@NgModule({
    imports: [ MdExpansionModule, CommonModule ],
    declarations: [ ExpandablePanelListComponent, ExpandablePanelComponent, ExpandableListComponent ],
    exports: [ ExpandablePanelListComponent, ExpandablePanelComponent, ExpandableListComponent ]
})
export class ExpandablePanelListModule { }
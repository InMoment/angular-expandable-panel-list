import { NgModule } from '@angular/core';

import { MdExpansionPanel } from '@angular/material';

import { CollapsiblePanelListComponent } from './collapsible-panel-list.component';
import { CollapsiblePanelComponent } from './collapsible-panel.component';
import { CollapsiblePanelListToggleComponent } from './collapsible-panel-list-toggle.component';

export { CollapsiblePanelListComponent } from './collapsible-panel-list.component';
export { CollapsiblePanelComponent } from './collapsible-panel.component';
export { CollapsiblePanelListToggleComponent } from './collapsible-panel-list-toggle.component';

@NgModule({
    imports: [ MdExpansionPanel ],
    declarations: [ CollapsiblePanelListComponent, CollapsiblePanelComponent, CollapsiblePanelListToggleComponent ],
    exports: [ CollapsiblePanelListComponent, CollapsiblePanelComponent, CollapsiblePanelListToggleComponent ]
})
export class CollapsiblePanelListModule { }
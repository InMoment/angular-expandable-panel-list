import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdRippleModule } from '@angular/material';

import { ExpandablePanelListComponent } from './expandable-panel-list.component';
import { ExpandablePanelComponent } from './expandable-panel.component';
import { ExpandablePanelTitleComponent } from './expandable-panel-title.component';
import { ExpandablePanelContentComponent } from './expandable-panel-content.component';

export { ExpandablePanelListComponent } from './expandable-panel-list.component';
export { ExpandablePanelComponent } from './expandable-panel.component';
export { ExpandablePanelTitleComponent } from './expandable-panel-title.component';
export { ExpandablePanelContentComponent } from './expandable-panel-content.component';

@NgModule({
    imports: [ MdRippleModule, CommonModule ],
    declarations: [ ExpandablePanelListComponent, ExpandablePanelComponent, ExpandablePanelTitleComponent, ExpandablePanelContentComponent ],
    exports: [ ExpandablePanelListComponent, ExpandablePanelComponent, ExpandablePanelTitleComponent, ExpandablePanelContentComponent ]
})
export class ExpandablePanelListModule { }
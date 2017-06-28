import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdRippleModule } from '@angular/material';

import { ExpandablePanelListComponent } from './expandable-panel-list.component';
import { ExpandablePanelComponent } from './expandable-panel.component';

export { ExpandablePanelListComponent } from './expandable-panel-list.component';
export { ExpandablePanelComponent } from './expandable-panel.component';

@NgModule({
    imports: [ MdRippleModule, CommonModule ],
    declarations: [ ExpandablePanelListComponent, ExpandablePanelComponent ],
    exports: [ ExpandablePanelListComponent, ExpandablePanelComponent ]
})
export class ExpandablePanelListModule { }
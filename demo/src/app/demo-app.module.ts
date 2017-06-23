import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdExpansionModule } from '@angular/material';
 
import { DemoAppComponent }  from './demo-app.component';
import { CollapsiblePanelListModule } from 'angular-collapsible-panel-list';
 
@NgModule({
  imports: [
    BrowserModule,
    CollapsiblePanelListModule,
    BrowserAnimationsModule,
    MdExpansionModule
  ],
  declarations: [
    DemoAppComponent
  ],
  bootstrap: [ DemoAppComponent ]
})
export class DemoAppModule { }
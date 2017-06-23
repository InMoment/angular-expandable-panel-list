import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdExpansionModule } from '@angular/material';
 
import { DemoAppComponent }  from './demo-app.component';
import { ExpandablePanelListModule } from 'angular-expandable-panel-list';
 
@NgModule({
  imports: [
    BrowserModule,
    ExpandablePanelListModule,
    BrowserAnimationsModule,
    MdExpansionModule
  ],
  declarations: [
    DemoAppComponent
  ],
  bootstrap: [ DemoAppComponent ]
})
export class DemoAppModule { }
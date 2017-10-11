import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material';
 
import { DemoAppComponent }  from './demo-app.component';
import { ExpandablePanelListModule } from 'angular-expandable-panel-list';
 
@NgModule({
  imports: [
    BrowserModule,
    ExpandablePanelListModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  declarations: [
    DemoAppComponent
  ],
  bootstrap: [ DemoAppComponent ]
})
export class DemoAppModule { }
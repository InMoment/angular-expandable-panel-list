import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CollapsiblePanelListToggleComponent, CollapsiblePanelListModule } from './collapsible-panel-list.module';

@Component({
  template: `<collapsible-panel-list-toggle></collapsible-panel-list-toggle>`
})
class TestAppComponent {}

describe('CollapsiblePanelComponent', () => {
  let hostComponent: TestAppComponent;
  let fixture: ComponentFixture<TestAppComponent>;
  let component: CollapsiblePanelListToggleComponent;
  let testComponent: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CollapsiblePanelListModule],
      declarations: [ TestAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAppComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
    const appDebugElement = fixture.debugElement.query(By.directive(CollapsiblePanelListToggleComponent));
    component = appDebugElement.componentInstance;
    testComponent = appDebugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

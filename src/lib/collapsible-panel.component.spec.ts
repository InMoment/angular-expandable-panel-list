import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CollapsiblePanelComponent, CollapsiblePanelListModule } from './collapsible-panel-list.module';

@Component({
  template: `<collapsible-panel></collapsible-panel>`
})
class TestAppComponent {}

describe('CollapsiblePanelComponent', () => {
  let hostComponent: TestAppComponent;
  let fixture: ComponentFixture<TestAppComponent>;
  let component: CollapsiblePanelComponent;
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
    const appDebugElement = fixture.debugElement.query(By.directive(CollapsiblePanelComponent));
    component = appDebugElement.componentInstance;
    testComponent = appDebugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

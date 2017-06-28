import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ExpandablePanelListComponent, ExpandablePanelListModule } from './expandable-panel-list.module';

@Component({
  template: `<expandable-panel-list></expandable-panel-list>`
})
class TestAppComponent {}

describe('ExpandablePanelComponent', () => {
  let hostComponent: TestAppComponent;
  let fixture: ComponentFixture<TestAppComponent>;
  let component: ExpandablePanelListComponent;
  let testComponent: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExpandablePanelListModule],
      declarations: [ TestAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAppComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
    const appDebugElement = fixture.debugElement.query(By.directive(ExpandablePanelListComponent));
    component = appDebugElement.componentInstance;
    testComponent = appDebugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

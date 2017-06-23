import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ExpandablePanelComponent, ExpandablePanelListModule } from './expandable-panel-list.module';

@Component({
  template: `<expandable-panel></expandable-panel>`
})
class TestAppComponent {}

describe('ExpandablePanelComponent', () => {
  let hostComponent: TestAppComponent;
  let fixture: ComponentFixture<TestAppComponent>;
  let component: ExpandablePanelComponent;
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
    const appDebugElement = fixture.debugElement.query(By.directive(ExpandablePanelComponent));
    component = appDebugElement.componentInstance;
    testComponent = appDebugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

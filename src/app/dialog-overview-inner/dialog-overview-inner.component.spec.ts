import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewInnerComponent } from './dialog-overview-inner.component';

describe('DialogOverviewInnerComponent', () => {
  let component: DialogOverviewInnerComponent;
  let fixture: ComponentFixture<DialogOverviewInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOverviewInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOverviewInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

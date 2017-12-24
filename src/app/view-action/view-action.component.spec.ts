import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActionComponent } from './view-action.component';

describe('ViewActionComponent', () => {
  let component: ViewActionComponent;
  let fixture: ComponentFixture<ViewActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

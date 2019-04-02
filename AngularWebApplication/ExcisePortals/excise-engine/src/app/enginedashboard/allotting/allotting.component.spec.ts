import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllottingComponent } from './allotting.component';

describe('AllottingComponent', () => {
  let component: AllottingComponent;
  let fixture: ComponentFixture<AllottingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllottingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllottingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

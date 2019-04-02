import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginedashboardComponent } from './enginedashboard.component';

describe('EnginedashboardComponent', () => {
  let component: EnginedashboardComponent;
  let fixture: ComponentFixture<EnginedashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnginedashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnginedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferdashboardComponent } from './transferdashboard.component';

describe('TransferdashboardComponent', () => {
  let component: TransferdashboardComponent;
  let fixture: ComponentFixture<TransferdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

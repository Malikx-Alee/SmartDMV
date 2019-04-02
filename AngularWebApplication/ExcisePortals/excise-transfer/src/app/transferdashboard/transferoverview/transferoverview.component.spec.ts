import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferoverviewComponent } from './transferoverview.component';

describe('TransferoverviewComponent', () => {
  let component: TransferoverviewComponent;
  let fixture: ComponentFixture<TransferoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

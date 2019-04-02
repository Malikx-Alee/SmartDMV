import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferVComponent } from './transfer-v.component';

describe('TransferVComponent', () => {
  let component: TransferVComponent;
  let fixture: ComponentFixture<TransferVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

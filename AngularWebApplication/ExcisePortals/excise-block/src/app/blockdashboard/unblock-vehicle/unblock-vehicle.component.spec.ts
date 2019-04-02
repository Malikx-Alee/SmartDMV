import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnblockVehicleComponent } from './unblock-vehicle.component';

describe('UnblockVehicleComponent', () => {
  let component: UnblockVehicleComponent;
  let fixture: ComponentFixture<UnblockVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnblockVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnblockVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

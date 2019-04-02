import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleNumberPlateComponent } from './vehicle-number-plate.component';

describe('VehicleNumberPlateComponent', () => {
  let component: VehicleNumberPlateComponent;
  let fixture: ComponentFixture<VehicleNumberPlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleNumberPlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleNumberPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

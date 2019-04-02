import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePlateNumberComponent } from './vehicle-plate-number.component';

describe('VehiclePlateNumberComponent', () => {
  let component: VehiclePlateNumberComponent;
  let fixture: ComponentFixture<VehiclePlateNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclePlateNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclePlateNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

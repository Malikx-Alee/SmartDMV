import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVehicleRequestTableComponent } from './register-vehicle-request-table.component';

describe('RegisterVehicleRequestTableComponent', () => {
  let component: RegisterVehicleRequestTableComponent;
  let fixture: ComponentFixture<RegisterVehicleRequestTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterVehicleRequestTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterVehicleRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

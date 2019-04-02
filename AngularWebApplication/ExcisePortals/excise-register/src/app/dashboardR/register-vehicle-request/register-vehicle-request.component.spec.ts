import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVehicleRequestComponent } from './register-vehicle-request.component';

describe('RegisterVehicleRequestComponent', () => {
  let component: RegisterVehicleRequestComponent;
  let fixture: ComponentFixture<RegisterVehicleRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterVehicleRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterVehicleRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

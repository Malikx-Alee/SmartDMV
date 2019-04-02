import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockVehicleComponent } from './block-vehicle.component';

describe('BlockVehicleComponent', () => {
  let component: BlockVehicleComponent;
  let fixture: ComponentFixture<BlockVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

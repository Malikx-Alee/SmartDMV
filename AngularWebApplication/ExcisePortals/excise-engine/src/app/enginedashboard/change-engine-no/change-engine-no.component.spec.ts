import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEngineNoComponent } from './change-engine-no.component';

describe('ChangeEngineNoComponent', () => {
  let component: ChangeEngineNoComponent;
  let fixture: ComponentFixture<ChangeEngineNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeEngineNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeEngineNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

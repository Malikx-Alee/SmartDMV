import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineoverviewComponent } from './engineoverview.component';

describe('EngineoverviewComponent', () => {
  let component: EngineoverviewComponent;
  let fixture: ComponentFixture<EngineoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

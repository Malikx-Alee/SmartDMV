import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineNComponent } from './engine-n.component';

describe('EngineNComponent', () => {
  let component: EngineNComponent;
  let fixture: ComponentFixture<EngineNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

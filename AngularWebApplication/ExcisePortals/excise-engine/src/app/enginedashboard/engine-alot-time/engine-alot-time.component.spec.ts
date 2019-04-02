import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineAlotTimeComponent } from './engine-alot-time.component';

describe('EngineAlotTimeComponent', () => {
  let component: EngineAlotTimeComponent;
  let fixture: ComponentFixture<EngineAlotTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineAlotTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineAlotTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

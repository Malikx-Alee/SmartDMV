import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockoverviewComponent } from './blockoverview.component';

describe('BlockoverviewComponent', () => {
  let component: BlockoverviewComponent;
  let fixture: ComponentFixture<BlockoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

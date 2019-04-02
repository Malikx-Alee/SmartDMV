import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockVComponent } from './block-v.component';

describe('BlockVComponent', () => {
  let component: BlockVComponent;
  let fixture: ComponentFixture<BlockVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

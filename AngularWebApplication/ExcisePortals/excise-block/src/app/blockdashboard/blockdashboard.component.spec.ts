import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockdashboardComponent } from './blockdashboard.component';

describe('BlockdashboardComponent', () => {
  let component: BlockdashboardComponent;
  let fixture: ComponentFixture<BlockdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewTComponent } from './overview-t.component';

describe('OverviewTComponent', () => {
  let component: OverviewTComponent;
  let fixture: ComponentFixture<OverviewTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

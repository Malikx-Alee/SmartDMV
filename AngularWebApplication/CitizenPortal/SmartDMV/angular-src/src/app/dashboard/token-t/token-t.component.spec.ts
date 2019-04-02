import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenTComponent } from './token-t.component';

describe('TokenTComponent', () => {
  let component: TokenTComponent;
  let fixture: ComponentFixture<TokenTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

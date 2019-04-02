import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVComponent } from './register-v.component';

describe('RegisterVComponent', () => {
  let component: RegisterVComponent;
  let fixture: ComponentFixture<RegisterVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

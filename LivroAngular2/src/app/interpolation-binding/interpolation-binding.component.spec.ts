import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationBindingComponent } from './interpolation-binding.component';

describe('InterpolationBindingComponent', () => {
  let component: InterpolationBindingComponent;
  let fixture: ComponentFixture<InterpolationBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolationBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

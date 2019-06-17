import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValuesComponent } from './input-values.component';

describe('InputValuesComponent', () => {
  let component: InputValuesComponent;
  let fixture: ComponentFixture<InputValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

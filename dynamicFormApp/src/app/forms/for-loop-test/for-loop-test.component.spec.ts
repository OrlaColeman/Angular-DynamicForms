import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoopTestComponent } from './for-loop-test.component';

describe('ForLoopTestComponent', () => {
  let component: ForLoopTestComponent;
  let fixture: ComponentFixture<ForLoopTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForLoopTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForLoopTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

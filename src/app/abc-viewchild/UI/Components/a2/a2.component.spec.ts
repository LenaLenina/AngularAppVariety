import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2Component } from './a2.component';

describe('A2Component', () => {
  let component: A2Component;
  let fixture: ComponentFixture<A2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [A2Component]
    });
    fixture = TestBed.createComponent(A2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

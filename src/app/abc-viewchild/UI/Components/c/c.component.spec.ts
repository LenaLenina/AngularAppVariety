import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CComponent } from './c.component';

describe('CComponent', () => {
  let component: CComponent;
  let fixture: ComponentFixture<CComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CComponent]
    });
    fixture = TestBed.createComponent(CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

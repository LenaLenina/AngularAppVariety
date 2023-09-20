import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayeredLibComponent } from './layered-lib.component';

describe('LayeredLibComponent', () => {
  let component: LayeredLibComponent;
  let fixture: ComponentFixture<LayeredLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayeredLibComponent]
    });
    fixture = TestBed.createComponent(LayeredLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

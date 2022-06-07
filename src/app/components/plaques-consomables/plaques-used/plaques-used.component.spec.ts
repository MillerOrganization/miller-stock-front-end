import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaquesUsedComponent } from './plaques-used.component';

describe('PlaquesUsedComponent', () => {
  let component: PlaquesUsedComponent;
  let fixture: ComponentFixture<PlaquesUsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaquesUsedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaquesUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

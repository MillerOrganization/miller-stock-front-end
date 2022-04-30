import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaquesComponent } from './plaques.component';

describe('PlaquesComponent', () => {
  let component: PlaquesComponent;
  let fixture: ComponentFixture<PlaquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavConsomableComponent } from './nav-consomable.component';

describe('NavConsomableComponent', () => {
  let component: NavConsomableComponent;
  let fixture: ComponentFixture<NavConsomableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavConsomableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavConsomableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

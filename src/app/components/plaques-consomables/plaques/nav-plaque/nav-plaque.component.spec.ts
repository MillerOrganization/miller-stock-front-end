import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPlaqueComponent } from './nav-plaque.component';

describe('NavPlaqueComponent', () => {
  let component: NavPlaqueComponent;
  let fixture: ComponentFixture<NavPlaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavPlaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPlaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

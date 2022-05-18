import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsommerPlaqueComponent } from './consommer-plaque.component';

describe('ConsommerPlaqueComponent', () => {
  let component: ConsommerPlaqueComponent;
  let fixture: ComponentFixture<ConsommerPlaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsommerPlaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsommerPlaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

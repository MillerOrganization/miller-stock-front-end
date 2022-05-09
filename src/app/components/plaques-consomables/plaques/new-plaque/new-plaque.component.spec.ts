import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlaqueComponent } from './new-plaque.component';

describe('NewPlaqueComponent', () => {
  let component: NewPlaqueComponent;
  let fixture: ComponentFixture<NewPlaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPlaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

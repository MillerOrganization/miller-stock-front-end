import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaquesConsomablesComponent } from './plaques-consomables.component';

describe('PlaquesConsomablesComponent', () => {
  let component: PlaquesConsomablesComponent;
  let fixture: ComponentFixture<PlaquesConsomablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaquesConsomablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaquesConsomablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

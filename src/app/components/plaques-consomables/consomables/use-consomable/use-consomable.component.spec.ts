import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseConsomableComponent } from './use-consomable.component';

describe('UseConsomableComponent', () => {
  let component: UseConsomableComponent;
  let fixture: ComponentFixture<UseConsomableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseConsomableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseConsomableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

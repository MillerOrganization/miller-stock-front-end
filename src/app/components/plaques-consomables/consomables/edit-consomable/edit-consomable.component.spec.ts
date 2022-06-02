import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConsomableComponent } from './edit-consomable.component';

describe('EditConsomableComponent', () => {
  let component: EditConsomableComponent;
  let fixture: ComponentFixture<EditConsomableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConsomableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConsomableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

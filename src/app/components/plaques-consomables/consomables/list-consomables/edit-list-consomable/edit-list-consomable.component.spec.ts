import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListConsomableComponent } from './edit-list-consomable.component';

describe('EditListConsomableComponent', () => {
  let component: EditListConsomableComponent;
  let fixture: ComponentFixture<EditListConsomableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditListConsomableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListConsomableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

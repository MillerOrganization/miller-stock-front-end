import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListConsomableComponent } from './add-list-consomable.component';

describe('AddListConsomableComponent', () => {
  let component: AddListConsomableComponent;
  let fixture: ComponentFixture<AddListConsomableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddListConsomableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListConsomableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

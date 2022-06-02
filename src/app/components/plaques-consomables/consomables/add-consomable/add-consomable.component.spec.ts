import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsomableComponent } from './add-consomable.component';

describe('AddConsomableComponent', () => {
  let component: AddConsomableComponent;
  let fixture: ComponentFixture<AddConsomableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConsomableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsomableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

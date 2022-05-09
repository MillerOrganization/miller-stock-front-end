import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlaque2Component } from './edit-plaque2.component';

describe('EditPlaque2Component', () => {
  let component: EditPlaque2Component;
  let fixture: ComponentFixture<EditPlaque2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPlaque2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlaque2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListPlaqueComponent } from './edit-list-plaque.component';

describe('EditListPlaqueComponent', () => {
  let component: EditListPlaqueComponent;
  let fixture: ComponentFixture<EditListPlaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditListPlaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListPlaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

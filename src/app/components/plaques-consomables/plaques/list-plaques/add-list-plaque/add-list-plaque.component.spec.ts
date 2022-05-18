import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListPlaqueComponent } from './add-list-plaque.component';

describe('AddListPlaqueComponent', () => {
  let component: AddListPlaqueComponent;
  let fixture: ComponentFixture<AddListPlaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddListPlaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListPlaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

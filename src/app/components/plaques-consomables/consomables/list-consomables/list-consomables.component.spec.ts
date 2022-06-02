import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsomablesComponent } from './list-consomables.component';

describe('ListConsomablesComponent', () => {
  let component: ListConsomablesComponent;
  let fixture: ComponentFixture<ListConsomablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConsomablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsomablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

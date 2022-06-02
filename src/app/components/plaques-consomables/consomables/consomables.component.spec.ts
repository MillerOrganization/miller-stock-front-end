import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsomablesComponent } from './consomables.component';

describe('ConsomablesComponent', () => {
  let component: ConsomablesComponent;
  let fixture: ComponentFixture<ConsomablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsomablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsomablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

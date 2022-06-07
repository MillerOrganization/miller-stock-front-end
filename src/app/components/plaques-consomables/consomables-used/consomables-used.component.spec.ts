import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsomablesUsedComponent } from './consomables-used.component';

describe('ConsomablesUsedComponent', () => {
  let component: ConsomablesUsedComponent;
  let fixture: ComponentFixture<ConsomablesUsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsomablesUsedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsomablesUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

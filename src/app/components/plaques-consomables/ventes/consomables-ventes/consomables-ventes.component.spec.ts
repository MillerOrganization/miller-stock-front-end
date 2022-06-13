import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsomablesVentesComponent } from './consomables-ventes.component';

describe('ConsomablesVentesComponent', () => {
  let component: ConsomablesVentesComponent;
  let fixture: ComponentFixture<ConsomablesVentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsomablesVentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsomablesVentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

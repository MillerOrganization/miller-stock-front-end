import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutesCommandesComponent } from './toutes-commandes.component';

describe('ToutesCommandesComponent', () => {
  let component: ToutesCommandesComponent;
  let fixture: ComponentFixture<ToutesCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToutesCommandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToutesCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

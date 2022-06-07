import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarVenteComponent } from './sidebar-vente.component';

describe('SidebarVenteComponent', () => {
  let component: SidebarVenteComponent;
  let fixture: ComponentFixture<SidebarVenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarVenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

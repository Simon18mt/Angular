import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberiaPerfilComponent } from './barberia-perfil.component';

describe('BarberiaPerfilComponent', () => {
  let component: BarberiaPerfilComponent;
  let fixture: ComponentFixture<BarberiaPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarberiaPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarberiaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

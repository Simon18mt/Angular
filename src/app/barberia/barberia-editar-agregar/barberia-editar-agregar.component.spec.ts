import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberiaEditarAgregarComponent } from './barberia-editar-agregar.component';

describe('BarberiaEditarAgregarComponent', () => {
  let component: BarberiaEditarAgregarComponent;
  let fixture: ComponentFixture<BarberiaEditarAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarberiaEditarAgregarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarberiaEditarAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

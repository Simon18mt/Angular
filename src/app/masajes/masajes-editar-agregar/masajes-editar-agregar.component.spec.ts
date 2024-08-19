import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasajesEditarAgregarComponent } from './masajes-editar-agregar.component';

describe('MasajesEditarAgregarComponent', () => {
  let component: MasajesEditarAgregarComponent;
  let fixture: ComponentFixture<MasajesEditarAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasajesEditarAgregarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasajesEditarAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

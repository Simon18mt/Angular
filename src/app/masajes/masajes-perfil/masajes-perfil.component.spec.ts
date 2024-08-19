import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasajesPerfilComponent } from './masajes-perfil.component';

describe('MasajesPerfilComponent', () => {
  let component: MasajesPerfilComponent;
  let fixture: ComponentFixture<MasajesPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasajesPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasajesPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

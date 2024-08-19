import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMasajesComponent } from './menu-masajes.component';

describe('MenuMasajesComponent', () => {
  let component: MenuMasajesComponent;
  let fixture: ComponentFixture<MenuMasajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuMasajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuMasajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

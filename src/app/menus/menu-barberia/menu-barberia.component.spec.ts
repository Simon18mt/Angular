import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarberiaComponent } from './menu-barberia.component';

describe('MenuBarberiaComponent', () => {
  let component: MenuBarberiaComponent;
  let fixture: ComponentFixture<MenuBarberiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuBarberiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBarberiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

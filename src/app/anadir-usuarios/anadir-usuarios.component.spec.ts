import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirUsuariosComponent } from './anadir-usuarios.component';

describe('AnadirUsuariosComponent', () => {
  let component: AnadirUsuariosComponent;
  let fixture: ComponentFixture<AnadirUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

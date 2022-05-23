import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistrarCitasComponent } from './modal-registrar-citas.component';

describe('ModalRegistrarCitasComponent', () => {
  let component: ModalRegistrarCitasComponent;
  let fixture: ComponentFixture<ModalRegistrarCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRegistrarCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRegistrarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

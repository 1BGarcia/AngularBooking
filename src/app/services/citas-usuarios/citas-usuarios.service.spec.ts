import { TestBed } from '@angular/core/testing';

import { CitasUsuariosService } from './citas-usuarios.service';

describe('CitasUsuariosService', () => {
  let service: CitasUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitasUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

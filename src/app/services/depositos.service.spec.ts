/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DepositosService } from './depositos.service';

describe('Service: Depositos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepositosService]
    });
  });

  it('should ...', inject([DepositosService], (service: DepositosService) => {
    expect(service).toBeTruthy();
  }));
});

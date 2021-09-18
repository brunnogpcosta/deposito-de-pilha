/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchStringService } from './search-string.service';

describe('Service: SearchString', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchStringService]
    });
  });

  it('should ...', inject([SearchStringService], (service: SearchStringService) => {
    expect(service).toBeTruthy();
  }));
});

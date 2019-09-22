import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HttpRequestService } from './http-request.service';

describe('HttpRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: HttpRequestService = TestBed.get(HttpRequestService);
    expect(service).toBeTruthy();
  });
});

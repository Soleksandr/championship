import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

import { UserService } from './user.service';
import { PersisterService } from '../../persister/persister.service';

describe('UserService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule.forRoot([])],
      providers: [{ provide: [Router, PersisterService] }],
    }),
  );

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});

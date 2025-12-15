import { TestBed } from '@angular/core/testing';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { jwtInterceptor } from './jwt-interceptor';
import { Authentication } from '../services/authentication';

describe('jwtInterceptor', () => {
  let interceptor: HttpInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    const mockAuth = { isLoggedIn: () => false, getToken: () => '' } as unknown as Authentication;
    interceptor = new jwtInterceptor(mockAuth);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});

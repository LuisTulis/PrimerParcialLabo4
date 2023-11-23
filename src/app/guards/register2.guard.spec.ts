import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { register2Guard } from './register2.guard';

describe('register2Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => register2Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

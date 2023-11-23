import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { register3Guard } from './register3.guard';

describe('register3Guard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => register3Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

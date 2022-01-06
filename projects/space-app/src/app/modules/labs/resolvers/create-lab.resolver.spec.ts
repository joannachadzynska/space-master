import { TestBed } from '@angular/core/testing';

import { CreateLabResolver } from './create-lab.resolver';

describe('CreateLabResolver', () => {
  let resolver: CreateLabResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CreateLabResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

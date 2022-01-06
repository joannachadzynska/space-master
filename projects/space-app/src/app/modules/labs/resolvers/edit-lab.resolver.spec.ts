import { TestBed } from '@angular/core/testing';

import { EditLabResolver } from './edit-lab.resolver';

describe('EditLabResolver', () => {
  let resolver: EditLabResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EditLabResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { Shoping } from './shopping';

describe('Shoping', () => {
  let service: Shoping;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Shoping);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

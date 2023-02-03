import { TestBed } from '@angular/core/testing';

import { DishSelectionService } from './dish-selection.service';

describe('DishSelectionService', () => {
  let service: DishSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

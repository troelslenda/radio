import { TestBed } from '@angular/core/testing';

import { LoggedinUsersService } from './loggedin-users.service';

describe('LoggedinUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggedinUsersService = TestBed.get(LoggedinUsersService);
    expect(service).toBeTruthy();
  });
});

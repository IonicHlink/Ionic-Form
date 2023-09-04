import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  users: any = [
    {
      email: 'abhishek@gmail.com',
      pass: 'Abhi@123',
    },
    {
      email: 'test@gmail.com',
      pass: 'Test@123',
    },
  ];
  constructor() {}
}

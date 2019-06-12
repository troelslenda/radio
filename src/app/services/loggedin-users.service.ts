import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class LoggedinUsersService {

  constructor(private db: AngularFireDatabase) {}

  getUsers() {
    return this.db.list(`users`).valueChanges();
  }
}

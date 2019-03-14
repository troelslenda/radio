import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExpressionService {

  constructor(private db: AngularFireDatabase) { }

  submitExpression(expression: string, displayName: string) {
    this.db.list('expressions').push({
      expression,
      displayName,
      createdAt: new Date().getTime(),
    });
  }
  getLastExpression() {
    const itemsRef = this.db.list('expressions', ref => ref.limitToLast(1));
    return itemsRef.snapshotChanges();
  }
}

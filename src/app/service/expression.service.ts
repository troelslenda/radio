import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ExpressionService {

  constructor(private db: AngularFireDatabase) { }

  submitExpression(expression: string, user: any) {
    this.db.list('expressions').push({
      expression,
      displayName: user.displayName,
      photoURL: user.photoURL,
      createdAt: new Date().getTime(),
    });
  }

  getExpressions() {
    const itemsRef = this.db.list('expressions', ref => ref.orderByKey().limitToLast(8));
    return itemsRef.valueChanges();
  }
}

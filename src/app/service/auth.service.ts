import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId;

  constructor(private afauth: AngularFireAuth, private db: AngularFireDatabase) {
  }

  get user(): Observable<firebase.User> {
    return this.afauth.user;
  }

  private async login(provider) {
    const a = await this.afauth.auth.signInWithPopup(provider);
    this.storeUserData(a.user.uid, a.user.displayName, a.user.photoURL);
  }

  public googleLogin(): void {
    const provider = new auth.GoogleAuthProvider();
    this.login(provider);
  }

  public msLogin(): void {
    const provider = new auth.OAuthProvider('microsoft.com');
    this.login(provider);
  }

  private storeUserData(uid, displayName, photoURL): void {
    this.db.object(`users/${uid}`).update({ displayName, photoURL });
  }

  public logout() {
    this.afauth.auth.signOut();
  }
}

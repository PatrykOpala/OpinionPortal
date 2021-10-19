import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AddOpinionService {

  public isLogg = false;

  constructor(public fAuth: AngularFireAuth) { }

  async llogin(email: string, pass: string){
    await this.fAuth.signInWithEmailAndPassword(email, pass)
    .then(res=>{
      this.isLogg = true;
      localStorage.setItem('user', JSON.stringify(res.user))
      window.location.href = "loginned"
    })

  }

  async lregister(email: string, pass: string){
    await this.fAuth.createUserWithEmailAndPassword(email, pass)
    .then(res=>{
      this.isLogg = true;
      localStorage.setItem('user', JSON.stringify(res.user));
    })
  }

  logoutU(){
    this.fAuth.signOut();
    localStorage.removeItem('user');
  }
}
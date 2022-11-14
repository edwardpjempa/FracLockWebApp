import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  userData: any;
  constructor(public afAuth: AngularFireAuth, public router: Router, private db: AngularFirestore) {}

  signIn(email: string, password: string) {
if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('Email is not valid');
      return;
    }
    if (password.length < 5) {
      alert('Password must be at least 6 characters');
      return;
    }
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('result id ', result.user?.uid);
        this.getUser(result.user?.uid)
        //this.afAuth.authState.subscribe((user) => {
         // if (user) {
          //  console.log('user ', user);
            
            //localStorage.setItem('user', JSON.stringify(user));
            //this.router.navigate(['System']);
        //  }
       // });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  isThereUser() {
    return localStorage.getItem('user');
  }

  async getUser(id:any) {
    await this.db.collection('user').doc(id).ref.get()
      .then(doc => {
          console.log("user", doc.data())
          localStorage.setItem('user', JSON.stringify(doc.data()))
      });
  }

  ngOnInit(): void {
    document.body.style.backgroundColor = '#39497d'
    document.documentElement.style.backgroundColor = '#39497d'
  }

  onEnter(e: KeyboardEvent, email: any, password:any){
    if(e.key == 'Enter'){
      console.log("enter")
      this.signIn(email, password)
    }
  }
}

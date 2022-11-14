import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as admin from 'firebase-admin';

export interface Item {
  firstName: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any = [];

  constructor(
    public router: Router,
    private db: AngularFirestore,
    private auth: AngularFireAuth
  ) {
    console.log(auth.user.subscribe((user) => console.log(user)));
  }

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    await this.db
      .collection('user')
      .ref.get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          console.log(doc.data());
          this.users.push(doc.data());
        });
      });
  }

  deleteTest() {
  
  }
}

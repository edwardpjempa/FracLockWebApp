import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { first, last } from 'rxjs';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  role: any = '';
  organizations: any = []
  organization: any = ''
  availableRoles: any = []
  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getOrganizations()
    this.getRoles()
  }

  createUser(
    email: any,
    password: any,
    repeatPassword: any,
    firstName: any,
    lastName: any,
    organization: any
  ) {
    if (firstName.length < 1) {
      alert('First Name cannot be left blank');
      return;
    }
    if (lastName.length < 1) {
      alert('Last Name cannot be left blank');
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('Email is not valid');
      return;
    }
    if (password.length < 5) {
      alert('Password must be at least 6 characters');
      return;
    }
    if (password != repeatPassword) {
      alert('password are not matching');
      return;
    }
    if (organization.length < 1) {
      alert('Organization cannot be left blank');
      return;
    }
    if (this.role == '') {
      alert('Must select Role');
      return;
    }
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.firestore
          .collection('user')
          .doc(result.user?.uid)
          .set({
            email: email,
            firstName: firstName,
            lastName: lastName,
            id: result.user?.uid,
            organization: organization,
            role: this.role,
            status: 'online',
          })
          .then( e => {
            localStorage.setItem(
              'user',
              JSON.stringify({
                email: email,
                firstName: firstName,
                lastName: lastName,
                id: result.user?.uid,
                organization: organization,
                role: this.role,
                status: 'online',
              })
            )
              this.router.navigate(['/'])
            }
          );
      });
  }


  async getRoles(){
    await this.firestore
    .collection('permissions')
    .ref.get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        for(var i=0; i< this.organizations.length; i++){
          if(this.organizations[i]["organizationID"] == doc.id){
            this.organizations[i]["roles"] = doc.data()
          }
        }
      });
    });
  }

  setRole(event: any) {
    this.role = event.target.value;
  }

  async getOrganizations(){
    await this.firestore
    .collection('organizations')
    .ref.get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        this.organizations.push({"organization": Object(doc.data())["title"], "organizationID": Object(doc.data())["name"]});
      });
    });
  }

  setOrganization(event: any) {
    this.organization = event.target.value;
    for(var i= 0; i< this.organizations.length; i++){
      if(this.organization == this.organizations[i]['organization'])
        this.availableRoles = Object.keys(this.organizations[i]['roles'])
    }
  }

}

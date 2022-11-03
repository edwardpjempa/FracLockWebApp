import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  dbPath = '/gateways';
  devices: any = [];
  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit(): void {

    const ref = this.db.list(this.dbPath).snapshotChanges();
    ref.subscribe((data) => {
      data.forEach(element => {
        this.devices.push(element["key"])
        console.log(element["key"])
      });
    });
    console.log(this.devices)

  }

}

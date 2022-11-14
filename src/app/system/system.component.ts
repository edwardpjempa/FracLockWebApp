import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css'],
})
export class SystemComponent implements OnInit {
  dbGate = '/gateways';
  devices: any = [];
  deviceOriginalName = '';

  constructor(private db: AngularFireDatabase, private router: Router) {}

  ngOnInit(): void {
    const ref = this.db.list(this.dbGate).snapshotChanges();
    ref.subscribe((data) => {
      data.forEach((element) => {
        this.devices.push({
          device: element['key'],
          name: 'e',
          P1value: 0,
        });
        this.getData(element['key']);
      });
    });
  }

  getData(device: any) {
    var dbPath = '/modules/' + device + '/data/lastReadings/deviceData';
    const reff = this.db.list(dbPath).valueChanges();
    reff.subscribe((data) => {
      for (var i = 0; i < this.devices.length; i++) {
        if (this.devices[i]['device'] == device) {
          this.devices[i]['P1value'] = Object(data[16])['value'];

          this.devices[i]['P2value'] = Object(data[17])['value'];

          this.devices[i]['P3value'] = Object(data[18])['value'];

          this.devices[i]['P4value'] = Object(data[19])['value'];
        }
      }
    });
    const d = '/modules/' + device;
    const r = this.db
      .object(d)
      .valueChanges()
      .subscribe((details) => {
        for (var i = 0; i < this.devices.length; i++) {
          if (this.devices[i]['device'] == device) {
            if(Object(details)['name'] == undefined || Object(details)['name'] == ''){
              this.devices[i]['name'] = 'No Name Given';

            }else{
              this.devices[i]['name'] = Object(details)['name'];
            }
          }
        }
      });
    /* da.forEach((e) => {

        if (e['key'] == 'name') {
          console.log(e)
          for (var i = 0; i < this.devices.length; i++) {
            if (this.devices[i]['device'] == device) {
              this.devices[i]['name'] = e;
            }
          }
        }
      });*/
    //});
  }

  selectedDevice(e: Event, device: string): void {
    let ele = e.target as HTMLElement;
    if (ele.tagName == 'INPUT' || ele.innerHTML == 'change') {
      return;
    } else {
      this.router.navigate(['/device', device]);
    }
    localStorage.setItem('device', device);
  }

  blurr(e: any, device: any) {
    let deviceData: any;
    const path = '/modules/' + device;
    if (e.target.value.length > 1) {
      const ref = this.db.list(path).valueChanges();
      ref.subscribe((data) => {
        deviceData = Object(data[0]);
        this.db.list('/modules').set('ds', { data: deviceData });
      });
    }
  }

  editName(e: Event, deviceAddress: any, deviceName: any) {
    e.stopPropagation();
    e.preventDefault();
    if (
      document.getElementById('editButton' + deviceAddress)?.innerHTML == 'edit'
    ) {
      document.getElementById(deviceAddress)!.style.display = 'none';
      document.getElementById('id' + deviceAddress)!.style.display = 'block';
      (
        document.getElementById('id' + deviceAddress) as HTMLInputElement
      ).value = deviceName;
      document.getElementById('editButton' + deviceAddress)!.innerHTML = 'done';
    } else {
      document.getElementById(deviceAddress)!.style.display = 'block';
      document.getElementById('id' + deviceAddress)!.style.display = 'none';
      document.getElementById('editButton' + deviceAddress)!.innerHTML = 'edit';
    }
  }

  public changee(deviceAddress: string): any {
    if (
      document.getElementById('editButton' + deviceAddress)?.innerHTML == 'done'
    ) {
      let newName = document.getElementById(
        'id' + deviceAddress
      )! as HTMLInputElement;
      var dbPath = '/modules/'; //deviceAddress
      this.db.list(dbPath).update(deviceAddress, { name: newName.value });
    }
  }
}

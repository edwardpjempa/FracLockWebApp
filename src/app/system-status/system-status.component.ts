import { Component, OnInit, SimpleChanges } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.css']
})
export class SystemStatusComponent implements OnInit {
  systemPressure: any
  hours: any
  cycleCount: any = []
  hydraulicTemp: any

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
   // document.getElementById('b1')!.style.width = String(Number(document.getElementsByClassName('boxCellular').item(0)?.clientWidth) + 30 + 'px')
    //document.getElementById('b11')!.style.width = String(Number(document.getElementsByClassName('boxCellular').item(0)?.clientWidth) + 30 + 'px')


    document.body.style.backgroundColor = 'white'
    document.documentElement.style.backgroundColor = 'white'
    let device = localStorage.getItem('device')

    var dbPath = '/modules/' + device + '/data/lastReadings/deviceData';
    const ref = this.db.list(dbPath).valueChanges();
    this.systemPressure = 0
    ref.subscribe((data) => {
      console.log(data);
      if (Object(data[29])['value'] >= 0) {
        this.systemPressure = Object(data[29])['value'];
      }
      this.hours = Object(data[30])['value'];
      for(var i = 0; i < 4; i++){
        this.cycleCount[i] = Object(data[9+i])['value']
      }
      this.hydraulicTemp = Object(data[20])['value']
    });
  }

  ngAfterViewChecked(){
  //  document.getElementById('b2')!.style.width = String(Number(document.getElementsByClassName('boxPressure').item(0)?.clientWidth) + 30 + 'px')
  //  document.getElementById('b22')!.style.width = String(Number(document.getElementsByClassName('boxPressure').item(0)?.clientWidth) + 30 + 'px')
//    document.getElementById('b3')!.style.width = String(Number(document.getElementsByClassName('boxLighting').item(0)?.clientWidth) + 30 + 'px')

  }
  onResize(event:any){
   // document.getElementById('b1')!.style.width = String(Number(document.getElementsByClassName('boxCellular').item(0)?.clientWidth) + 30 + 'px')
   // document.getElementById('b11')!.style.width = String(Number(document.getElementsByClassName('boxCellular').item(0)?.clientWidth) + 30 + 'px')
   // document.getElementById('b2')!.style.width = String(Number(document.getElementsByClassName('boxPressure').item(0)?.clientWidth) + 30 + 'px')
   // document.getElementById('b22')!.style.width = String(Number(document.getElementsByClassName('boxPressure').item(0)?.clientWidth) + 30 + 'px')
   // document.getElementById('b3')!.style.width = String(Number(document.getElementsByClassName('boxLighting').item(0)?.clientWidth) + 29 + 'px')
  }
}

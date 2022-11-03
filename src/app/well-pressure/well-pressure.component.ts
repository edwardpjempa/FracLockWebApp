import { Component, NgModule, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NgxChartsModule, Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-well-pressure',
  templateUrl: './well-pressure.component.html',
  styleUrls: ['./well-pressure.component.css'],
})

export class WellPressureComponent implements OnInit {
  dbPath = '/modules/00_60_E9_29_2C_91/data/lastReadings/deviceData';
  pressures: any = [];
  single: any[] = [ {
    "name": "",
    "value": 9000
  },
  {
    "name": "",
    "value": 9000
  },
  {
    "name": "",
    "value": 9000
  },
  {
    "name": "",
    "value": 9000
  }];
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#010101', '#0f0', '#0ff'],
  };
  view: any[] = [300, 600];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = '';
  showYAxisLabel = false;
  yAxisLabel = '';
  yScaleMax = 15000;


  constructor(private db: AngularFireDatabase) {
    //Object.assign(this,  [ {
      //"name": "Germany",
      //"value": 8940000
    //}] );

  }

  ngOnInit(): void {

    const ref = this.db.list(this.dbPath).valueChanges();
    ref.subscribe((data) => {
      if(Object(data[25])["value"] >= 0){
        console.log(Object(data[25])["value"])
        this.single[0]["value"]= Object(data[25])["value"]
      }
      if(Object(data[26])["value"] >= 0){
        console.log(Object(data[25])["value"])
        this.single[1]["value"]= Object(data[26])["value"]
      }
      if(Object(data[27])["value"] >= 0){
        console.log(Object(data[25])["value"])
        this.single[2]["value"]= Object(data[27])["value"]
      }
      if(Object(data[28])["value"] >= 0){
        console.log(Object(data[25])["value"])
        this.single[3]["value"]= Object(data[28])["value"]
      }
    });
  }
}

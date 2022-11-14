import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-well-pressure',
  templateUrl: './well-pressure.component.html',
  styleUrls: ['./well-pressure.component.css'],
})
export class WellPressureComponent implements OnInit {
  pressures: any[] = [
    {
      name: '',
      value: 9000,
    },
    {
      name: '',
      value: 9000,
    },
    {
      name: '',
      value: 9000,
    },
    {
      name: '',
      value: 9000,
    },
  ];
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#010101', '#0f0', '#0ff'],
  };
  view: any[] = [300, 550];

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

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) {}

  ngOnInit(): void {
    document.body.style.backgroundColor = 'white'
    document.documentElement.style.backgroundColor = 'white'

    var device = '';
    device = String(this.route.snapshot.paramMap.get('device'));

    var dbPath = '/modules/' + device + '/data/lastReadings/deviceData';
    const ref = this.db.list(dbPath).valueChanges();
    ref.subscribe((data) => {
      if (Object(data[16])['value'] >= 0) {
        this.pressures[0]['value'] = Object(data[16])['value'];
      }else if (Object(data[16])['value'] <= 0){
        this.pressures[0]['value'] = 0
      }
      if (Object(data[17])['value'] >= 0) {
        this.pressures[1]['value'] = Object(data[17])['value'];
      }else if (Object(data[17])['value'] <= 0){
        this.pressures[1]['value'] = 0
      }
      if (Object(data[18])['value'] >= 0) {
        this.pressures[2]['value'] = Object(data[18])['value'];
      }else if (Object(data[18])['value'] <= 0){
        this.pressures[2]['value'] = 0
      }
      if (Object(data[19])['value'] >= 0) {
        this.pressures[3]['value'] = Object(data[19])['value'];
      }else if (Object(data[19])['value'] <= 0){
        this.pressures[3]['value'] = 0
      }
    });
  }
}

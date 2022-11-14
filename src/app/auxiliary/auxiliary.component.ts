import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-auxiliary',
  templateUrl: './auxiliary.component.html',
  styleUrls: ['./auxiliary.component.css']
})
export class AuxiliaryComponent implements OnInit {
  pressures: any = [{'name': '', 'value': 900}]
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = '';
  showYAxisLabel = false;
  yAxisLabel = '';
  yScaleMax = 15000;
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#010101'],
  };
  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundColor = 'white'
    document.documentElement.style.backgroundColor = 'white'
  }

}
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-quick-test',
  templateUrl: './quick-test.component.html',
  styleUrls: ['./quick-test.component.css'],
})
export class QuickTestComponent implements OnInit {
  pressures: any = [ {
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
  view: any[] = [300, 550];

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
    domain: ['#010101', '#0f0', '#0ff'],
  };

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    document.body.style.backgroundColor = 'white'
    document.documentElement.style.backgroundColor = 'white'

    var device = '';
    device = String(this.route.snapshot.paramMap.get('device'));

    var dbPath = '/modules/' + device + '/data/lastReadings/deviceData';
    const ref = this.db.list(dbPath).valueChanges();
    ref.subscribe((data) => {
      console.log(data);
      if (Object(data[25])['value'] >= 0) {
        this.pressures[0]['value'] = Object(data[25])['value'];
      }
      if (Object(data[26])['value'] >= 0) {
        this.pressures[1]['value'] = Object(data[26])['value'];
      }
      if (Object(data[27])['value'] >= 0) {
        this.pressures[2]['value'] = Object(data[27])['value'];
      }
      if (Object(data[28])['value'] >= 0) {
        this.pressures[3]['value'] = Object(data[28])['value'];
      }
    });
  }

  rangeValue(r: any): void {
    console.log(r)
  }
  percentage: string = '0%';

  private updateSliderToggle: boolean = false;

  updateSlider(e: MouseEvent){
    console.log(e.clientX);
    let percentage: number = Math.floor(
      (e.clientX / (e.offsetX - 3)) * 100
    );

    const previous = parseInt(this.percentage);
    if (previous > percentage) {
      percentage = previous - 25;
    } else {
      percentage = previous + 25;
    }
    if (percentage > 100) {
      percentage = 100;
    } else if (percentage < 0) {
      percentage = 0;
    }

    //console.log(previous);

    this.percentage = percentage + '%';
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-pressure',
  templateUrl: './set-pressure.component.html',
  styleUrls: ['./set-pressure.component.css']
})
export class SetPressureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  percentage: string = '0%';

  private updateSliderToggle: boolean = false;

  /*updateSlider(event: MouseEvent) {
    console.log(event.layerY);
    let percentage: number = Math.floor(
      (event.clientY / (event.offsetY - 3)) * 100
    );
    console.log(percentage);
    console.log('');
    percentage= 100-percentage

    //console.log(previous);

    this.percentage = percentage + '%';
  }*/
}

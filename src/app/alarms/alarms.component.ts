import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css']
})
export class AlarmsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundColor = 'white'
    document.documentElement.style.backgroundColor = 'white'
  }

}

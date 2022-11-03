import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fhe',
  templateUrl: './fhe.component.html',
  styleUrls: ['./fhe.component.css']
})
export class FHEComponent implements OnInit {
  displayWellPressure = true;
  displayQuickTest = false
  constructor() { }

  ngOnInit(): void {
  }

  showWellPressure() {
    this.displayWellPressure = true
    this.displayQuickTest = false
  }

  showQuickTest() {
    this.displayWellPressure = false
    this.displayQuickTest = true
  }

}

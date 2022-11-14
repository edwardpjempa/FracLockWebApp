import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-fhe',
  templateUrl: './fhe.component.html',
  styleUrls: ['./fhe.component.css']
})
export class FHEComponent implements OnInit {
  displayWellPressure = true;
  displayQuickTest = false
 
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

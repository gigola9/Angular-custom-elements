import { Component } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent {

  gel: number = 0;
  usd: number = 0;

  inputGel(e: any) {
    if (e) {
      this.usd = Math.round(e.value / 2.54 * 100) / 100;
    }
  }

  inputUsd(e: any) {
    if (e) {
      this.gel = Math.round(e.value * 2.54 * 100) / 100;
    }
  }
}

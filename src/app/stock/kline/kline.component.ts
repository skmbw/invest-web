import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Stock} from '../../bean/stock';

@Component({
  selector: 'app-kline',
  templateUrl: './kline.component.html',
  styleUrls: ['./kline.component.css']
})
export class KlineComponent implements OnInit {
  code = 'sh000001';
  name = '';

  constructor(private matDialogRef: MatDialogRef<KlineComponent>, @Inject(MAT_DIALOG_DATA) public data: Stock) {
    if (this.data.code.startsWith('0')) {
      this.code = 'sz' + this.data.code;
    } else if (this.data.code .startsWith('6')) {
      this.code = 'sh' + this.data.code;
    }
    this.name = this.data.name;
  }

  ngOnInit(): void {
  }

}

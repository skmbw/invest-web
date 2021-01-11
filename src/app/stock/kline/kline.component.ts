import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Stock} from '../../bean/stock';

@Component({
  selector: 'app-kline',
  templateUrl: './kline.component.html',
  styleUrls: ['./kline.component.css']
})
export class KlineComponent implements OnInit {
  code = '000001';
  name = '';

  constructor(private matDialogRef: MatDialogRef<KlineComponent>, @Inject(MAT_DIALOG_DATA) public data: Stock) {
    this.code = this.data.code;
    this.name = this.data.name;
  }

  ngOnInit(): void {
  }

}

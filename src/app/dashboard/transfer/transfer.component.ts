import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Invest} from '../../bean/invest';
import {InvestService} from '../../service/invest.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<TransferComponent>, @Inject(MAT_DIALOG_DATA) public data: Invest,
              private investService: InvestService) { }

  ngOnInit(): void {
  }

}

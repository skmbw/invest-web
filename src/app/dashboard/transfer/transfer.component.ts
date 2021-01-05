import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Invest} from '../../bean/invest';
import {InvestService} from '../../service/invest.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  title = '买入';
  invest: Invest = new Invest();

  constructor(private matDialogRef: MatDialogRef<TransferComponent>, @Inject(MAT_DIALOG_DATA) public data: Invest,
              private investService: InvestService, private toastr: ToastrService) {
    if (this.data.state === 1) {
      this.title = '买入';
    } else if (this.data.state === 2) {
      this.title = '卖出';
    }
  }

  ngOnInit(): void {
  }

  transfer(invest: Invest) {
    this.investService.add(invest).subscribe(result => {
      if (result.code === 1) {
        this.toastr.success(this.title + '交易成功');
      } else {
        this.toastr.success(result.message);
      }
    });
  }
}

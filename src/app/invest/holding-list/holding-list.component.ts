import {Component, OnInit} from '@angular/core';
import {InvestService} from '../../service/invest.service';
import {ToastrService} from 'ngx-toastr';
import {Invest} from '../../bean/invest';
import {TransferComponent} from '../../dashboard/transfer/transfer.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-holding-list',
  templateUrl: './holding-list.component.html',
  styleUrls: ['./holding-list.component.css']
})
export class HoldingListComponent implements OnInit {
  investList: Invest[] = [];
  dataColumns = ['name', 'code', 'price', 'backup', 'increaseRate', 'sharesNumber', 'amount', 'profit', 'operate'];

  constructor(private investService: InvestService, private toastrService: ToastrService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    const invest = new Invest();
    invest.state = 1;
    this.investService.list(invest).subscribe(result => {
      if (result.code === 1) {
        this.investList = result.data as Invest[];
      } else {
        this.toastrService.success(result.message);
      }
    });
  }

  sellout(invest: Invest) {
    invest.state = 2;
    this.dialog.open(TransferComponent, {
      width: '650px',
      height: '600px',
      data: invest
    });
  }
}

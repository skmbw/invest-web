import {Component, OnInit} from '@angular/core';
import {InvestService} from '../../service/invest.service';
import {StockService} from '../../service/stock.service';
import {AccountService} from '../../service/account.service';
import {ToastrService} from 'ngx-toastr';
import {Account} from '../../bean/account';
import {MatDialog} from '@angular/material/dialog';
import {TransferComponent} from '../transfer/transfer.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  account: Account = new Account(); // 如果这里不赋值，在html初始化时，会为null，那么报错

  constructor(private investService: InvestService, private stockService: StockService,
              private accountService: AccountService, private toastr: ToastrService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.accountService.list().subscribe(result => {
      this.account = result.data as Account;
    });
  }

  buying() {
    this.dialog.open(TransferComponent, {
      width: '650px',
      height: '500px',
      data: {state: 1}
    });
  }

  sellout() {
    this.dialog.open(TransferComponent, {
      width: '650px',
      height: '500px',
      data: {state: 2}
    });
  }
}

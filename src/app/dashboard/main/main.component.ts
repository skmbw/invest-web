import {Component, OnInit} from '@angular/core';
import {InvestService} from '../../service/invest.service';
import {StockService} from '../../service/stock.service';
import {AccountService} from '../../service/account.service';
import {Account} from '../../bean/account';
import {MatDialog} from '@angular/material/dialog';
import {CapitalInoutComponent} from '../capital-inout/capital-inout.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  account: Account = new Account(); // 如果这里不赋值，在html初始化时，会为null，那么报错

  constructor(private investService: InvestService, private stockService: StockService,
              private accountService: AccountService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.accountService.list().subscribe(result => {
      this.account = result.data as Account;
    });
  }

  transferIn() {
    this.dialog.open(CapitalInoutComponent, {
      width: '600px',
      height: '500px',
      data: {state: 1}
    });
  }

  transferOut() {
    this.dialog.open(CapitalInoutComponent, {
      width: '600px',
      height: '500px',
      data: {state: 2}
    });
  }
}

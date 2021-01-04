import {Component, OnInit} from '@angular/core';
import {InvestService} from '../../service/invest.service';
import {StockService} from '../../service/stock.service';
import {AccountService} from '../../service/account.service';
import {ToastrService} from 'ngx-toastr';
import {Account} from '../../bean/account';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  account: Account;

  constructor(private investService: InvestService, private stockService: StockService,
              private accountService: AccountService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.accountService.list().subscribe(result => {
      this.account = result.data as Account;
    });
  }

}

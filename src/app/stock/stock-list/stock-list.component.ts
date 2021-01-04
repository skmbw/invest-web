import {Component, OnInit} from '@angular/core';
import {StockService} from '../../service/stock.service';
import {Stock} from '../../bean/stock';
import {InvestService} from '../../service/invest.service';
import {MatDialog} from '@angular/material/dialog';
import {EvaluateComponent} from '../evaluate/evaluate.component';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stockList: Stock[] = [];

  constructor(private stockService: StockService, private investService: InvestService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.stockService.list().subscribe(result => {
      this.stockList = result.data as Stock[];
    });
  }

  evaluateBuying(stock: Stock) {
    this.investService.evaluateBuying(stock).subscribe(result => {
      this.dialog.open(EvaluateComponent, {
        width: '650px',
        height: '500px',
        data: result.data
      });
    });
  }

  evaluateSellout(stock: Stock) {
    this.investService.evaluateSellout(stock).subscribe(result => {
      this.dialog.open(EvaluateComponent, {
        width: '650px',
        height: '500px',
        data: result.data
      });
    });
  }
}

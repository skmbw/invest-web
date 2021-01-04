import {Component, OnInit} from '@angular/core';
import {StockService} from '../../service/stock.service';
import {Stock} from '../../bean/stock';
import {InvestService} from '../../service/invest.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stockList: Stock[] = [];

  constructor(private stockService: StockService, private investService: InvestService) {
  }

  ngOnInit(): void {
    this.stockService.list().subscribe(result => {
      this.stockList = result.data as Stock[];
    });
  }

  evaluateBuying(stock: Stock) {
    this.investService.evaluateBuying(stock).subscribe(result => {});
  }

  evaluateSellout(stock: Stock) {
    this.investService.evaluateSellout(stock).subscribe(result => {});
  }
}

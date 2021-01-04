import {Component, OnInit} from '@angular/core';
import {StockService} from '../../service/stock.service';
import {Stock} from '../../bean/stock';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stockList: Stock[] = [];

  constructor(private stockService: StockService) {
  }

  ngOnInit(): void {
    this.stockService.list().subscribe(result => {
      this.stockList = result.data as Stock[];
    });
  }

}

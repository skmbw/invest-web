import {Component, OnInit} from '@angular/core';
import {StockService} from '../../service/stock.service';
import {Stock} from '../../bean/stock';
import {InvestService} from '../../service/invest.service';
import {MatDialog} from '@angular/material/dialog';
import {EvaluateComponent} from '../evaluate/evaluate.component';
import {ToastrService} from 'ngx-toastr';
import {EvaluationResult} from '../../bean/evaluation.result';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stockList: Stock[] = [];
  displayedColumns: string[][] = [['name', '股票名称'],
    ['code', '股票代码'], ['currentPrice', '价格'],
    ['increaseRate', '涨幅'], ['marketValue', '市值']];
  chineseColumnsToDisplay: string[] = ['股票名称', '股票代码', '价格', '涨幅'];
  // columnsToDisplay: string[] = this.displayedColumns.slice();
  dataColumns = ['name', 'code', 'currentPrice', 'increaseRate', 'marketValue'];
  // displayedColumns: string[] = this.columnsToDisplay.slice();
  data: PeriodicElement[] = ELEMENT_DATA;
  constructor(private stockService: StockService, private investService: InvestService,
              private dialog: MatDialog, private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.stockService.list().subscribe(result => {
      this.stockList = result.data as Stock[];
    });
  }

  evaluateBuying(stock: Stock) {
    this.investService.evaluateBuying(stock).subscribe(result => {
      if (result.code === 1) {
        const evaluationResult = result.data as EvaluationResult;
        evaluationResult.type = 'buying';
        evaluationResult.name = stock.name;
        this.dialog.open(EvaluateComponent, {
          width: '650px',
          height: '550px',
          data: evaluationResult
        });
      } else {
        this.toastrService.success(result.message);
      }
    });
  }

  evaluateSellout(stock: Stock) {
    this.investService.evaluateSellout(stock).subscribe(result => {
      if (result.code === 1) {
        const evaluationResult = result.data as EvaluationResult;
        evaluationResult.type = 'sellout';
        evaluationResult.name = stock.name;
        this.dialog.open(EvaluateComponent, {
          width: '650px',
          height: '550px',
          data: evaluationResult
        });
      } else {
        this.toastrService.success(result.message);
      }
    });
  }
}

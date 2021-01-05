import {Component, OnInit} from '@angular/core';
import {StockService} from '../../service/stock.service';
import {Stock} from '../../bean/stock';
import {InvestService} from '../../service/invest.service';
import {MatDialog} from '@angular/material/dialog';
import {EvaluateComponent} from '../evaluate/evaluate.component';
import {ToastrService} from 'ngx-toastr';
import {EvaluationResult} from '../../bean/evaluation.result';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stockList: Stock[] = [];
  displayedColumns: string[][] = [['name', '股票名称'],
    ['code', '股票代码'], ['currentPrice', '价格'],
    ['increaseRate', '涨幅'], ['marketValue', '市值（亿）'], ['operate', '操作']];
  dataColumns = ['name', 'code', 'currentPrice', 'increaseRate', 'marketValue', 'operate'];

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

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Stock} from '../../bean/stock';
import {StockService} from '../../service/stock.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  stock = new Stock();

  constructor(private matDialogRef: MatDialogRef<AddStockComponent>, @Inject(MAT_DIALOG_DATA) public data: Stock,
              private stockService: StockService, private toastrService: ToastrService) {
  }

  ngOnInit(): void {
  }

  add() {
    if (this.stock.name == null || this.stock.name === '') {
      this.toastrService.success('股票名称不能为空。');
      return;
    }
    if (this.stock.code == null || this.stock.code === '') {
      this.toastrService.success('股票代码不能为空。');
      return;
    }
    if (this.stock.alphaCode == null || this.stock.alphaCode === '') {
      this.toastrService.success('股票简称不能为空。');
      return;
    }
    this.stockService.add(this.stock).subscribe(result => {
      if (result.code === 1) {
        this.toastrService.success('添加自选股成功。');
        this.stock = new Stock();
      } else {
        this.toastrService.success(result.message);
      }
    });
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Invest} from '../../bean/invest';
import {InvestService} from '../../service/invest.service';
import {ToastrService} from 'ngx-toastr';
import {StockService} from '../../service/stock.service';
import {Stock} from '../../bean/stock';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  title = '买入';
  invest: Invest = new Invest();
  stockList: Stock[] = [];
  costPerShare = '0';

  constructor(private matDialogRef: MatDialogRef<TransferComponent>, @Inject(MAT_DIALOG_DATA) public data: Invest,
              private investService: InvestService, private toastr: ToastrService,
              private stockService: StockService) {
    if (this.data.state === 1) {
      this.title = '买入';
    } else if (this.data.state === 2) {
      this.title = '卖出';
    }
    this.invest.id = this.data.id;
    this.invest.name = data.name;
    this.invest.code = data.code;
  }

  ngOnInit(): void {
    this.stockService.list().subscribe(result => {
      if (result.code === 1) {
        this.stockList = result.data as Stock[];
      } else {
        this.toastr.success(result.message);
      }
    });
  }

  transfer() {
    const name = this.invest.name;
    if (name == null || name === '') {
      this.toastr.success('股票名称不能为空。');
      return;
    }
    const shareNumber = this.invest.sharesNumber;
    if (shareNumber % 100 !== 0) {
      this.toastr.success('买入股票数必须是100股（1手）的整数倍。');
      return;
    }
    const price = this.invest.price;
    if (price === undefined || price <= 0) {
      this.toastr.success('买入价格必须大于0。');
      return;
    }
    this.invest.state = this.data.state; // 1买入、2卖出
    const transferDate = this.invest.transferDate;
    this.invest.transferDate = transferDate.replace('T', ' ') + ':00';
    if (this.invest.state === 1) {
      this.investService.buying(this.invest).subscribe(result => {
        if (result.code === 1) {
          this.toastr.success(this.title + '交易成功');
          this.invest = new Invest(); // clear
          this.matDialogRef.close(); // 关闭对话框
        } else {
          this.toastr.success(result.message);
        }
      });
    } else if (this.invest.state === 2) {
      this.investService.sellout(this.invest).subscribe(result => {
        if (result.code === 1) {
          this.toastr.success(this.title + '交易成功');
          this.invest = new Invest();
          this.matDialogRef.close();
        } else {
          this.toastr.success(result.message);
        }
      });
    }
  }

  stockNameChange(event: any) {
    const name = event as string;
    for (const stock of this.stockList) {
      if (stock.name === name) {
        this.invest.code = stock.code;
        break;
      }
    }
  }

  change(event: any) {
    const shareNumber = event as number;
    if (this.invest.price != null && this.invest.price > 0) {
      // 成交额
      const amount = shareNumber * this.invest.price;
      // 成本价
      const costPrice = this.invest.price * 1.0025;
      // 每股成本
      const costPerShare = costPrice - this.invest.price;
      this.costPerShare = costPerShare.toFixed(3);
      // 交易成本
      const cost = costPerShare * shareNumber;
      this.invest.amount = Number(amount.toFixed(2));
      this.invest.costPrice = Number(costPrice.toFixed(2));
      this.invest.cost = Number(cost.toFixed(2));
    }
  }
}

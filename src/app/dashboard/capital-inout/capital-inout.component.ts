import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Account} from '../../bean/account';
import {AccountService} from '../../service/account.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-capital-inout',
  templateUrl: './capital-inout.component.html',
  styleUrls: ['./capital-inout.component.css']
})
export class CapitalInoutComponent implements OnInit {
  title = '转入';
  account = new Account();
  operateList = [{name: '资金转入', state: 1}, {name: '资金转出', state: 2}];
  capitalAmountString = '';

  constructor(private matDialogRef: MatDialogRef<CapitalInoutComponent>, @Inject(MAT_DIALOG_DATA) public data: Account,
              private accountService: AccountService, private toastr: ToastrService) {
    if (data.state === 2) {
      this.account.state = 2;
      this.title = '转出';
    } else {
      this.account.state = 1;
    }
  }

  ngOnInit(): void {
  }

  transfer() {
    if (this.account.state == null) {
      this.toastr.success('请选择操作类型。');
      return;
    }
    if (this.account.capital == null || this.account.capital === 0) {
      this.toastr.success('请填写资金数额。');
      return;
    }
    this.accountService.capitalTransfer(this.account).subscribe(result => {
      if (result.code === 1) {
        this.toastr.success('资金操作成功。');
        this.account = new Account();
        this.matDialogRef.close();
      } else {
        this.toastr.success(result.message);
      }
    });
  }

  amountChange(num: number) {
    this.capitalAmountString = this.convertCurrency(num);
  }

  convertCurrency(money) {
    // 汉字的数字
    const cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    // 基本单位
    const cnBasicUnits = ['', '拾', '佰', '仟'];
    // 对应整数部分扩展单位
    const cnIntUnits = ['', '万', '亿', '兆'];
    // 对应小数部分单位
    const cnDecUnits = ['角', '分', '毫', '厘'];
    // 整数金额时后面跟的字符
    const cnInteger = '整';
    // 整型完以后的单位
    const cnIntLast = '元';
    // 最大处理的数字
    const maxNum = 999999999999999.9999;
    // 金额整数部分
    let integerNum;
    // 金额小数部分
    let decimalNum;
    // 输出的中文金额字符串
    let capitalChineseString = '';
    // 分离金额后用的数组，预定义
    let parts;
    if (money === '') {
      return '';
    }
    money = parseFloat(money);
    if (money >= maxNum) {
      // 超出最大处理数字
      return '';
    }
    if (money === 0) {
      capitalChineseString = cnNums[0] + cnIntLast + cnInteger;
      return capitalChineseString;
    }
    // 转换为字符串
    money = money.toString();
    if (money.indexOf('.') === -1) {
      integerNum = money;
      decimalNum = '';
    } else {
      parts = money.split('.');
      integerNum = parts[0];
      decimalNum = parts[1].substr(0, 4);
    }
    // 获取整型部分转换
    if (parseInt(integerNum, 10) > 0) {
      let zeroCount = 0;
      const IntLen = integerNum.length;
      for (let i = 0; i < IntLen; i++) {
        const n = integerNum.substr(i, 1);
        const p = IntLen - i - 1;
        const q = p / 4;
        const m = p % 4;
        if (n === '0') {
          zeroCount++;
        } else {
          if (zeroCount > 0) {
            capitalChineseString += cnNums[0];
          }
          // 归零
          zeroCount = 0;
          capitalChineseString += cnNums[parseInt(n, 10)] + cnBasicUnits[m];
        }
        if (m === 0 && zeroCount < 4) {
          capitalChineseString += cnIntUnits[q];
        }
      }
      capitalChineseString += cnIntLast;
    }
    // 小数部分
    if (decimalNum !== '') {
      const decLen = decimalNum.length;
      for (let i = 0; i < decLen; i++) {
        const n = decimalNum.substr(i, 1);
        if (n !== '0') {
          capitalChineseString += cnNums[Number(n)] + cnDecUnits[i];
        }
      }
    }
    if (capitalChineseString === '') {
      capitalChineseString += cnNums[0] + cnIntLast + cnInteger;
    } else if (decimalNum === '') {
      capitalChineseString += cnInteger;
    }
    return capitalChineseString;
  }
}

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
      } else {
        this.toastr.success(result.message);
      }
    });
  }
}

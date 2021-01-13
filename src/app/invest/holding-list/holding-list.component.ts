import {Component, OnInit} from '@angular/core';
import {InvestService} from '../../service/invest.service';
import {ToastrService} from 'ngx-toastr';
import {Invest} from '../../bean/invest';
import {TransferComponent} from '../../dashboard/transfer/transfer.component';
import {MatDialog} from '@angular/material/dialog';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-holding-list',
  templateUrl: './holding-list.component.html',
  styleUrls: ['./holding-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class HoldingListComponent implements OnInit {
  investList: Invest[] = [];
  dataColumns = ['name', 'code', 'price', 'backup', 'increaseRate', 'sharesNumber', 'amount', 'profit', 'profitRate', 'operate'];
  expandedElement: Invest | null;

  constructor(private investService: InvestService, private toastrService: ToastrService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.investService.holdingList().subscribe(result => {
      if (result.code === 1) {
        this.investList = result.investBeanList as Invest[];
      } else {
        this.toastrService.success(result.message);
      }
    });
  }

  sellout(invest: Invest) {
    invest.state = 2;
    this.dialog.open(TransferComponent, {
      width: '650px',
      height: '600px',
      data: invest
    });
  }
}

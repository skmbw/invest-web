import {Component, OnInit} from '@angular/core';
import {InvestService} from '../../service/invest.service';
import {ToastrService} from 'ngx-toastr';
import {Invest} from '../../bean/invest';

@Component({
  selector: 'app-holding-list',
  templateUrl: './holding-list.component.html',
  styleUrls: ['./holding-list.component.css']
})
export class HoldingListComponent implements OnInit {
  investList: Invest[] = [];

  constructor(private investService: InvestService, private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.investService.list().subscribe(result => {
      if (result.code === 1) {
        this.investList = result.data as Invest[];
      } else {
        this.toastrService.success(result.message);
      }
    });
  }

}

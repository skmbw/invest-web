import {Component, OnInit} from '@angular/core';
import {InvestService} from '../../service/invest.service';
import {ToastrService} from 'ngx-toastr';
import {Invest} from '../../bean/invest';

@Component({
  selector: 'app-clearance-list',
  templateUrl: './clearance-list.component.html',
  styleUrls: ['./clearance-list.component.css']
})
export class ClearanceListComponent implements OnInit {
  investList: Invest[] = [];
  dataColumns = ['name', 'code', 'price', 'selloutPrice', 'selloutVolume', 'selloutAmount', 'profit', 'operate'];

  constructor(private investService: InvestService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    const invest = new Invest();
    invest.state = 2;
    this.investService.list(invest).subscribe(result => {
      if (result.code === 1) {
        this.investList = result.data as Invest[];
      } else {
        this.toastr.success(result.message);
      }
    });
  }

}

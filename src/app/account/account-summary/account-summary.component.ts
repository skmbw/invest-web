import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../service/account.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

}

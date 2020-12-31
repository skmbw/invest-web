import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountDetailComponent} from './account-detail/account-detail.component';
import {AccountSummaryComponent} from './account-summary/account-summary.component';


@NgModule({
  declarations: [AccountDetailComponent, AccountSummaryComponent],
  exports: [
    AccountSummaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }

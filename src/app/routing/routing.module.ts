import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../dashboard/main/main.component';
import {HoldingListComponent} from '../invest/holding-list/holding-list.component';
import {ClearanceListComponent} from '../invest/clearance-list/clearance-list.component';
import {StockListComponent} from '../stock/stock-list/stock-list.component';
import {AccountSummaryComponent} from '../account/account-summary/account-summary.component';
import {AccountDetailComponent} from '../account/account-detail/account-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'invest/holding', component: HoldingListComponent},
  {path: 'invest/clearance', component: ClearanceListComponent},
  {path: 'stock/list', component: StockListComponent},
  {path: 'account', component: AccountSummaryComponent},
  {path: 'account/detail', component: AccountDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }

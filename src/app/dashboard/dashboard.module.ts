import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {MatTabsModule} from '@angular/material/tabs';
import {InvestModule} from '../invest/invest.module';
import {StockModule} from '../stock/stock.module';
import {MatCardModule} from '@angular/material/card';
import {TransferComponent} from './transfer/transfer.component';


@NgModule({
  declarations: [MainComponent, TransferComponent],
    imports: [
        CommonModule,
        MatTabsModule,
        InvestModule,
        StockModule,
        MatCardModule
    ]
})
export class DashboardModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {MatTabsModule} from '@angular/material/tabs';
import {InvestModule} from '../invest/invest.module';
import {StockModule} from '../stock/stock.module';
import {MatCardModule} from '@angular/material/card';
import {TransferComponent} from './transfer/transfer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {CapitalInoutComponent} from './capital-inout/capital-inout.component';


@NgModule({
  declarations: [MainComponent, TransferComponent, CapitalInoutComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    InvestModule,
    StockModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule
  ]
})
export class DashboardModule { }

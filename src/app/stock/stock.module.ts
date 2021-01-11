import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockListComponent} from './stock-list/stock-list.component';
import {MatListModule} from '@angular/material/list';
import {EvaluateComponent} from './evaluate/evaluate.component';
import {MatDividerModule} from '@angular/material/divider';
import {RouterModule} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {KlineComponent} from './kline/kline.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [StockListComponent, EvaluateComponent, KlineComponent],
  exports: [
    StockListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    RouterModule,
    MatDialogModule,
    MatTableModule,
    MatTabsModule,
  ]
})
export class StockModule {
}

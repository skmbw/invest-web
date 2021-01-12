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
import {AddStockComponent} from './add-stock/add-stock.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [StockListComponent, EvaluateComponent, KlineComponent, AddStockComponent],
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
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
  ]
})
export class StockModule {
}

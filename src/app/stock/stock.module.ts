import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockListComponent} from './stock-list/stock-list.component';
import {MatListModule} from '@angular/material/list';
import {EvaluateComponent} from './evaluate/evaluate.component';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [StockListComponent, EvaluateComponent],
  exports: [
    StockListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule
  ]
})
export class StockModule {
}

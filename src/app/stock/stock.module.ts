import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockListComponent} from './stock-list/stock-list.component';
import {MatListModule} from '@angular/material/list';
import {EvaluateComponent} from './evaluate/evaluate.component';
import {MatDividerModule} from '@angular/material/divider';
import {RouterModule} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [StockListComponent, EvaluateComponent],
  exports: [
    StockListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    RouterModule,
    MatDialogModule,
    MatTableModule
  ]
})
export class StockModule {
}

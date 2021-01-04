import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockListComponent} from './stock-list/stock-list.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
    declarations: [StockListComponent],
    exports: [
        StockListComponent
    ],
    imports: [
        CommonModule,
        MatListModule
    ]
})
export class StockModule { }

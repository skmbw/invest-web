import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HoldingListComponent} from './holding-list/holding-list.component';
import {ClearanceListComponent} from './clearance-list/clearance-list.component';
import {InvestListComponent} from './invest-list/invest-list.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
    declarations: [HoldingListComponent, ClearanceListComponent, InvestListComponent],
  exports: [
    HoldingListComponent,
    ClearanceListComponent,
    InvestListComponent
  ],
    imports: [
        CommonModule,
        MatTableModule
    ]
})
export class InvestModule { }

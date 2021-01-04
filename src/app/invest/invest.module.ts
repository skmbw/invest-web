import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HoldingListComponent} from './holding-list/holding-list.component';
import {ClearanceListComponent} from './clearance-list/clearance-list.component';


@NgModule({
    declarations: [HoldingListComponent, ClearanceListComponent],
    exports: [
        HoldingListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class InvestModule { }

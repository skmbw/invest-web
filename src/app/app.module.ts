import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {DashboardModule} from './dashboard/dashboard.module';
import {InvestModule} from './invest/invest.module';
import {StockModule} from './stock/stock.module';
import {RoutingModule} from './routing/routing.module';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    DashboardModule,
    InvestModule,
    StockModule,
    RoutingModule,
    ToastrModule.forRoot({timeOut: 3000, positionClass: 'toast-center-center'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

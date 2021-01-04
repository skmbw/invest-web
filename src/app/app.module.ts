import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {DashboardModule} from './dashboard/dashboard.module';
import {InvestModule} from './invest/invest.module';
import {StockModule} from './stock/stock.module';
import {RoutingModule} from './routing/routing.module';
import {ToastrModule} from 'ngx-toastr';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCommonModule, MatOptionModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {AccountModule} from './account/account.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatCommonModule,
    MatCheckboxModule,
    // MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatTabsModule,
    MatPaginatorModule,
    // MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    // 如果不在这里配置，chrome会提示脏检查错误
    ToastrModule.forRoot({timeOut: 3000, positionClass: 'toast-center-center'}),
    AccountModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JsonBean} from '../bean/jsonbean';
import {environment} from '../../environments/environment';
import {Stock} from '../bean/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpClient: HttpClient) {
  }

  list(): Observable<JsonBean> {
    return this.httpClient.post<JsonBean>(environment.host + 'stock/list', {});
  }

  add(stock: Stock): Observable<JsonBean> {
    return this.httpClient.post<JsonBean>('stock/doAdd', stock);
  }
}

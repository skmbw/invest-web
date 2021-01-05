import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Stock} from '../bean/stock';
import {Observable} from 'rxjs';
import {JsonBean} from '../bean/jsonbean';
import {environment} from '../../environments/environment';
import {Invest} from '../bean/invest';

@Injectable({
  providedIn: 'root'
})
export class InvestService {

  constructor(private httpClient: HttpClient) {
  }

  evaluateBuying(stock: Stock): Observable<JsonBean> {
    return this.httpClient.post<JsonBean>(environment.host + 'invest/buying', stock);
  }

  evaluateSellout(stock: Stock): Observable<JsonBean> {
    return this.httpClient.post<JsonBean>(environment.host + 'invest/sellout', stock);
  }

  add(invest: Invest): Observable<JsonBean> {
    return this.httpClient.post<JsonBean>(environment.host + 'invest/doAdd', invest);
  }
}

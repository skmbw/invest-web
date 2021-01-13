import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Stock} from '../bean/stock';
import {Observable} from 'rxjs';
import {JsonBean} from '../bean/jsonbean';
import {environment} from '../../environments/environment';
import {Invest, InvestReply} from '../bean/invest';

@Injectable({
  providedIn: 'root'
})
export class InvestService {

  constructor(private httpClient: HttpClient) {
  }

  evaluateBuying(stock: Stock): Observable<JsonBean> {
    return this.httpClient.post<JsonBean>(environment.host + 'invest/evaluateBuying', stock);
  }

  evaluateSellout(stock: Stock): Observable<JsonBean> {
    return this.httpClient.post<JsonBean>(environment.host + 'invest/evaluateSellout', stock);
  }

  buying(invest: Invest): Observable<JsonBean> {
    return this.httpClient.post<JsonBean>(environment.host + 'invest/buying', invest);
  }

  sellout(invest: Invest): Observable<JsonBean> {
    return this.httpClient.post<JsonBean>(environment.host + 'invest/sellout', invest);
  }

  list(invest: Invest): Observable<JsonBean> {
    return this.httpClient.post<JsonBean>(environment.host + 'invest/list', invest);
  }

  holdingList(): Observable<InvestReply> {
    const invest = new Invest();
    invest.state = 1;
    return this.httpClient.post<InvestReply>('invest/list', invest);
  }
}

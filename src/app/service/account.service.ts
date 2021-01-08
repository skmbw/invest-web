import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {JsonBean} from '../bean/jsonbean';
import {Account} from '../bean/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) {
  }

  list(): Observable<JsonBean> {
    return this.httpClient.post<JsonBean>(environment.host + 'stockAccount/list', {name: '尹雷'});
  }

  capitalTransfer(account: Account): Observable<JsonBean> {
    let url = 'stockAccount/transferIn';
    if (account.state === 2) {
      url = 'stockAccount/transferOut';
      account.capitalTransferOut = account.capital;
    } else {
      account.capitalTransferIn = account.capital;
    }
    return this.httpClient.post<JsonBean>(environment.host + url, account);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {JsonBean} from '../bean/jsonbean';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) {
  }

  list(): Observable<JsonBean> {
    return this.httpClient.post<JsonBean>(environment.host + 'stockAccount/list', {name: '尹雷'});
  }
}

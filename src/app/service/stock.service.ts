import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JsonBean} from '../bean/jsonbean';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpClient: HttpClient) {
  }

  list(): Observable<JsonBean> {
    return this.httpClient.post<JsonBean>(environment.host + 'stock/list', {});
  }
}

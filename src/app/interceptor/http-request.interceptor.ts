import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let url = req.url;
    // 仅仅添加一个url前缀，如果没有添加的话。也可以添加token，header等
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = environment.host + url;
    }
    const newReq = req.clone({url});
    return next.handle(newReq);
  }
}

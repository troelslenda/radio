import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, flatMap } from 'rxjs/operators';
import { timer, of, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private cache: any;
  private serviceUrl = environment.playsnow;

  constructor(private http: HttpClient) {}

  private cacheIsValid = (cache: any) =>
    cache &&
    cache.endTime &&
    new Date().getTime() < new Date(cache.endTime).getTime()

  getInfo(): Observable<any> {
    // Send data immediately and then every 5 seconds.
    return timer(0, 5000).pipe(
      flatMap(() => {
        // if the cache is invalidated by exceeding program endTime,
        // the observable will be created from http, otherwise from cache.
        const observable = this.cacheIsValid(this.cache)
          ? of(this.cache)
          : this.http.get(this.serviceUrl);

        return observable.pipe(
          // The api contains a lot of unneeded data.
          map((res: any) => {
            // effectly overriding cache with cache, or the new data.
            this.cache = res;
            return {
              title: res.Now.Title,
              startTime: new Date(res.Now.StartTime),
              endTime: new Date(res.Now.EndTime)
            };
          })
        );
      })
    );
  }
}

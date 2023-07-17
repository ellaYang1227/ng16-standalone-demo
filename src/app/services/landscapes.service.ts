import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LandscapesService {
  API_ROOT = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  getLandscapes(): Observable<any> {
    return this.http.get<any[]>(`${this.API_ROOT}444/landscapes`)
      .pipe(map(result => result, () => {
        return false;
      }), catchError(e => {
        return of({});
      }));
  }

  getLandscape(id: string): Observable<any> {
    return this.http.get<any[]>(`${this.API_ROOT}444/landscapes/${id}`)
      .pipe(map(result => result, () => {
        return false;
      }), catchError(e => {
        return of({});
      }));
  }
}

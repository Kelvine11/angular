import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {

  apiUrl = environment.apiUrl + 'jokes/random'

  constructor(private http: HttpClient) { }

  getRandom(): Observable<string>{
    return this.http.get<any>(this.apiUrl).pipe(map(data => data.value))
  }
}

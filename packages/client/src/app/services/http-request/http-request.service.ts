import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PersisterService } from '../persister/persister.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  private baseUrl = `${environment.baseUrl}/api`;

  constructor(private http: HttpClient, private persister: PersisterService) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${url}`, this.getHttpOptions());
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${url}`, body, this.getHttpOptions());
  }

  private getHttpOptions = () => {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.persister.getPersistedItem('token')}`,
      }),
    };
  };
}

import { Trocaroleo } from '../model/trocas';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class TrocaOilObserv {
    URL = 'http://localhost:3000/trocas';

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    constructor(private httpClient: HttpClient) {}


  save(troca: Trocaroleo): Observable<Trocaroleo> {
    return this.httpClient.post<Trocaroleo>(this.URL, troca, this.httpOptions);
  }

  listTrocas(): Observable<Trocaroleo[]> {
    return this.httpClient.get<Trocaroleo[]>(`${this.URL}`);
  }

  getById(trocaid: number): Observable<Trocaroleo> {
    return this.httpClient.get<Trocaroleo>(`${this.URL}/${trocaid}`);
  }



}

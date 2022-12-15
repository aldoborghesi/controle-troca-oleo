import { Trocaroleo } from './../model/trocas';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class TrocaPromiseService {
    URL = 'http://localhost:3000/trocas';



      constructor(private httpClient: HttpClient) {}



}

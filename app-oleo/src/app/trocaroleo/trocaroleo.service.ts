import { Trocaroleo } from './../model/trocas';
import { Constants } from './../util/constants';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WebStorageUtil } from './../util/web-storage-util';
import { ThisReceiver } from '@angular/compiler';



@Injectable({
  providedIn: 'root',
})


export class TrocaroleoService {
  trocas!: Trocaroleo[];

  constructor(
    private http: HttpClient
  ) {
    this.trocas = WebStorageUtil.get(Constants.TROCAROLEO_KEY);

  }

  save(troca: Trocaroleo) {
    this.trocas = WebStorageUtil.get(Constants.TROCAROLEO_KEY);
    /*
    let json = JSON.stringify(troca);
    let new_trocas = [];
    new_trocas.push(troca);
    localStorage.setItem('teste', json);
    */

    this.trocas = [];
    this.trocas.push(troca);

    WebStorageUtil.set(Constants.TROCAROLEO_KEY, this.trocas);
  }

  update(Trocaroleo: Trocaroleo) {
    this.trocas = WebStorageUtil.get(Constants.TROCAROLEO_KEY);
    //this.delete(Trocaroleo.Trocaroleoname);
    this.save(Trocaroleo);
  }
/*
  delete(Trocaroleoname: string): boolean {
    this.Trocaroleos = WebStorageUtil.get(Constants.TROCAROLEO_KEY);
     this.Trocaroleos = this.Trocaroleos.filter((u) => {
      return u.Trocaroleoname?.valueOf() != Trocaroleoname?.valueOf();
    });

    WebStorageUtil.set(Constants.TrocaroleoS_KEY, this.Trocaroleos);
    return true;
  }


*/
isExist(value: string): boolean {
  this.trocas = WebStorageUtil.get(Constants.TROCAROLEO_KEY);
  for (let u of this.trocas) {
    if (u.placa?.valueOf() == value?.valueOf()) {
      return true;
    }
  }
  return false;
}

  getTrocaroleos(): Trocaroleo[] {
    this.trocas = WebStorageUtil.get(Constants.TROCAROLEO_KEY);
    return this.trocas;
  }
/*
  notifyTotalTrocaroleos() {
    this.TrocaroleoSource.next(this.getTrocaroleos()?.length);
    // if (this.getTrocaroleos()?.length > 1) {
    //   this.TrocaroleoSource.complete();
    // }
  }


  asObservable(): Observable<number> {
    return this.TrocaroleoSource;
    //return this.TrocaroleoSource.asObservable()
  }
    */

  getTotalTrocas() {
    return this.http.get<{value: number}[]> ('http://localhost:4200/assets/totais.json');


  }
}

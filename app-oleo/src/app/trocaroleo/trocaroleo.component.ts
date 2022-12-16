
import { Component, OnInit } from '@angular/core';
import { Trocaroleo } from '../model/trocas';
import { Constants } from './../util/constants';
import { WebStorageUtil } from './../util/web-storage-util';
import { NgForm } from '@angular/forms';

import { FormControl, FormGroup } from '@angular/forms';
import { TrocaOilObserv } from '../services/trocaoilobserv';
@Component({
  selector: 'app-trocaroleo',
  templateUrl: './trocaroleo.component.html',
  styleUrls: ['./trocaroleo.component.css']
})
export class TrocaroleoComponent implements OnInit {

  OilForm: any;
  submitted = false;
  troca!: Trocaroleo;
  trocas!: Trocaroleo[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private trocaOilObserv: TrocaOilObserv) {}

  ngOnInit(): void {
    this.getTrocas();
    this.OilForm = new FormGroup({
      trocaid: new FormControl(),
      placa: new FormControl(''),
      modelo: new FormControl(''),
      km: new FormControl(),
    }

    );
  }

  SaveTrocarOleo(): void {
    this.isSubmitted = true;
    if (!this.OilForm.valid) {
      console.log('Formulário Inválido');
      return;
    }

    this.OilForm.value.trocaid = Math.round(Math.random() * 1000);

    const newtroca: Trocaroleo = this.OilForm.value;

    this.trocas.push(newtroca);
    localStorage.setItem('trocas', JSON.stringify(this.trocas));
    this.OilForm.reset();

    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';

    // Salvar a entidade no NGserver
    console.log("Persistindo no Json server");
    this.trocaOilObserv.save(newtroca).subscribe();

    //this.trocaService.notifyTotalTrocaroleos();
  }

  getTrocas() : void {
    if(localStorage.getItem('trocas')) {
      this.trocas = JSON.parse(localStorage.getItem('trocas') || '{}');
    } else {
      this.trocas = [];
    }
  }
  /**
   * Realiza o clone do objeto, justamente para não refletir as mudanças
   * imediatamente na lista de usuários cadastrados sem pressionar o submit.
   * @param Trocaroleo
   */
  onEdit(Trocaroleo: Trocaroleo) {
    /* this.Trocaroleo = Trocaroleo;
    let clone = Trocaroleo.clone(Trocaroleo);
    this.Trocaroleo = clone;
    */
  }
  /*
  onDelete(Trocaroleoname: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + Trocaroleoname
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.trocaService.delete(Trocaroleoname);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'O item foi removido com sucesso!';
    } else {
      this.message = 'Opps! O item não pode ser removido!';
    }
    this.Trocaroleos = this.trocaService.getTrocaroleos();
    this.trocaService.notifyTotalTrocaroleos();
  }
  */
}



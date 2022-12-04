
import { Component, OnInit, ViewChild } from '@angular/core';
import { Trocaroleo } from '../model/trocas';
import { Constants } from './../util/constants';
import { WebStorageUtil } from './../util/web-storage-util';
import { NgForm } from '@angular/forms';
import { TrocaroleoService} from './trocaroleo.service';


@Component({
  selector: 'app-trocaroleo',
  templateUrl: './trocaroleo.component.html',
  styleUrls: ['./trocaroleo.component.css'],
  providers: [TrocaroleoService],
})
export class TrocaroleoComponent implements OnInit {

  @ViewChild('form') form!: NgForm;

  submitted = false;

  troca!: Trocaroleo;
  trocas?: Trocaroleo[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private trocaService: TrocaroleoService) {}

  ngOnInit(): void {
    //Shared.initializeWebStorage();
    this.troca = new Trocaroleo('', '',0);
    this.trocas = this.trocaService.getTrocaroleos();
  }

  onSubmit() {
    this.isSubmitted = true;
    /*
    if (!this.trocaService.isExist(this.troca.placa)) {
      this.trocaService.save(this.troca);
    } else {
      this.trocaService.update(this.troca);
    }
*/

    this.trocaService.save(this.troca);

    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';

    //this.form.reset();
    this.troca = new Trocaroleo('', '', 0);

    this.trocas = this.trocaService.getTrocaroleos();

    //this.trocaService.notifyTotalTrocaroleos();
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



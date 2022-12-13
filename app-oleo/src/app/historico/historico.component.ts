import { Component, OnInit } from '@angular/core';
import { Trocaroleo } from '../model/trocas';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  trocas!: Trocaroleo[];

  constructor() { }

  ngOnInit(): void {
    this.ShowTrocas();
  }

  ShowTrocas() : void {
    if(localStorage.getItem('trocas')) {
      this.trocas = JSON.parse(localStorage.getItem('trocas') || '{}');
    } else {
      this.trocas = [];
    }
  }

}

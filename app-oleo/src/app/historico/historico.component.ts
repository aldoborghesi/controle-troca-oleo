import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Trocaroleo } from '../model/trocas';


@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {


  trocas!: Trocaroleo[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

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

  onClickItem(_t19: Trocaroleo) {
    this.router.navigate(['/historico/detalhes', _t19?.trocaid]);
  }

}

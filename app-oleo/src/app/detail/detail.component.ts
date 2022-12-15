import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Trocaroleo } from '../model/trocas';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  troca: Trocaroleo | undefined;
  trocas!: Trocaroleo[];

  constructor(
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    // Pega as trocas do localstorage
    this.getTrocas();

    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const trocaIdFromRoute = Number(routeParams.get('trocaid'));


    console.log('Listando a primeira troca' + this.trocas[0].trocaid);
    // Find the product that correspond with the id provided in route.
    this.troca = this.trocas.find(
      (troca) => troca.trocaid === trocaIdFromRoute
    );


  }

  getTrocas() : void {
    if(localStorage.getItem('trocas')) {
      this.trocas = JSON.parse(localStorage.getItem('trocas') || '{}');
    } else {
      this.trocas = [];
    }
  }

}

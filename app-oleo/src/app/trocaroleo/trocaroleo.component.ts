import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trocaroleo',
  templateUrl: './trocaroleo.component.html',
  styleUrls: ['./trocaroleo.component.css']
})
export class TrocaroleoComponent implements OnInit {
  public  placa!:string;
  public  modelo!:string;
  public  km!:number;

  constructor() { }

  ngOnInit(): void {
  }

}

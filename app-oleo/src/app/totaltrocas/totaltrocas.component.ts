import { TrocaroleoService } from './../trocaroleo/trocaroleo.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-totaltrocas',
  templateUrl: './totaltrocas.component.html',
  styleUrls: ['./totaltrocas.component.css']
})

export class TotaltrocasComponent implements OnInit, OnChanges {
  @Input() public sumoil: number = 0;
  @Output() gotomechanical = new EventEmitter<boolean>();

  totalTrocas!: Observable<{ value: number}[]>;

  constructor(
    private trocaService: TrocaroleoService
  ) { }

  ngOnChanges(): void {
    if (this.sumoil > 5) {
      this.gotomechanical.emit(true);
    }
  }

  ngOnInit(): void {
    this.totalTrocas = this.trocaService.getTotalTrocas();
  }

}

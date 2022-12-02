import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {

  title = 'app-oleo';
  username = 'Usuário logado: Aldo Borghesi';
  public formMessage!:string;
  public emailAddress!:string;

  public getUsername() {
    return this.username;
  }

  public onSubmitForm() {
    return this.formMessage = 'Obrigado por se registar. Vamos enviar um e-mail de confirmação.';
  }

  constructor() { }

  ngOnInit(): void {
  }

}

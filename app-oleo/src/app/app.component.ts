import * as M from 'materialize-css';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
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
}

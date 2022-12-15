import { TotaltrocasComponent } from './totaltrocas/totaltrocas.component';
import { DetailComponent } from './detail/detail.component';
import { HistoricoComponent } from './historico/historico.component';
import { TrocaroleoComponent } from './trocaroleo/trocaroleo.component';
import { LandPageComponent } from './land-page/land-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LandPageComponent },
  { path: 'trocar', component: TrocaroleoComponent },
  { path: 'historico', component: HistoricoComponent },
  { path: 'trocastotal', component: TotaltrocasComponent},
  { path: 'historico/:trocaid', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompInicioComponent } from './comp-inicio/comp-inicio.component';

import { CompContatoComponent } from './comp-contato/comp-contato.component';
import { CompLocalizacaoComponent } from './comp-localizacao/comp-localizacao.component';
import { CompCassinosComponent } from './comp-cassinos/comp-cassinos.component';
import { CompTrabalheConoscoComponent } from './comp-trabalhe-conosco/comp-trabalhe-conosco.component';

const routes: Routes = [
  {path: '', component: CompInicioComponent},
  {path: 'contato', component: CompContatoComponent},
  {path: 'localizacao', component: CompLocalizacaoComponent},
  {path: 'cassinos', component: CompCassinosComponent},
  {path: 'trabalheConosco', component: CompTrabalheConoscoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

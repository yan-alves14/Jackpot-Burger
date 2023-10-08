import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompSobreNos } from './comp-sobre-nos/comp-sobre-nos.component';
import { CompPromocoesComponent } from './comp-promocoes/comp-promocoes.component';
import { CompContatoComponent } from './comp-contato/comp-contato.component';
import { CompLocalizacaoComponent } from './comp-localizacao/comp-localizacao.component';
import { CompCassinosComponent } from './comp-cassinos/comp-cassinos.component';
import { CompTrabalheConoscoComponent } from './comp-trabalhe-conosco/comp-trabalhe-conosco.component';
import { CompInicioComponent } from './comp-inicio/comp-inicio.component';


import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    CompSobreNos,
    CompPromocoesComponent,
    CompContatoComponent,
    CompLocalizacaoComponent,
    CompCassinosComponent,
    CompTrabalheConoscoComponent,
    CompInicioComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

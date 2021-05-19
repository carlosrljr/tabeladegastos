import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PoNavbarModule } from '@po-ui/ng-components';
import { PoModule } from '@po-ui/ng-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RotinaLancamentosComponent } from './home/rotina-lancamentos/rotina-lancamentos.component';
import { TabelaComponent } from './home/tabela/tabela.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RotinaLancamentosComponent,
    TabelaComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoNavbarModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from  '@angular/http';

import { AppComponent } from './app.component';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';

import { AlertaService } from './alerta.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaPessoaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AlertaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

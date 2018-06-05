import { Component } from '@angular/core';

import { AlertaService } from './alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Livro Angular 2'; //interpolation
  foto: string = 'favicon.ico'; //property bind
  nome: string = "Thiago"; //two-way data binding
  desenvolvimento: string[] = ['Angular 2', 'JavaScript', 'TypeScript', 'HTML', 'CSS'];

  constructor(private service: AlertaService) {

  }

  enviarMsg(): void {
    this.service.msgAlerta();
  }
}

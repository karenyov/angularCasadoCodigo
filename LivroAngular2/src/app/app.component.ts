import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Livro Angular 2'; //interpolation
  foto: string = 'favicon.ico'; //property bind
  nome: string = "Thiago"; //two-way data binding

  msgAlerta(): void { //event binding
    alert('Livro Angular 2');
  }
}

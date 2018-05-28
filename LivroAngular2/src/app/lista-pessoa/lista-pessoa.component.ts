import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {

  pessoas: string[] = ['João', 'Maria', 'Angular 2'];

  constructor() { }

  ngOnInit() {
  }

  listar() {

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  valorFonte: string = 20 + 'px';
  tamanho: number = 20;
  validaFonte: boolean = false;
  validaCor: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  incrementar() {
    this.tamanho++;
    this.valorFonte = this.tamanho + 'px';
  }

  mudaFonte() {
    this.validaFonte = !this.validaFonte;
  }

  mudaCor() {
    this.validaCor = !this.validaCor;
  }

}

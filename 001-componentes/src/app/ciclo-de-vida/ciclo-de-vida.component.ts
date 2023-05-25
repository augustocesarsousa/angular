import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.scss'],
})
export class CicloDeVidaComponent implements OnInit {
  /**
   * Este evento é iniciado após o Angular
   * exibir pela primeira vez as propriedades
   * vinculadas aos dados ou quando o
   * componente foi inicializado
   *
   * Ele é usuado principalmente para
   * inicializar dados em um componente
   */
  ngOnInit(): void {
    console.log('ngOnInit foi executado!');
  }
}

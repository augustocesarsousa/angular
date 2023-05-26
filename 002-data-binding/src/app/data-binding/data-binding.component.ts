import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  public exemploHTMLInterpolation: string = '<h1>{{ texto }}</h1>';
  public exemploClasseInterpolation: string =
    'public texto: string = "Exemplo Interpolation!';

  public exemploHTMLPropertyBinding: string =
    '<button [disabled]="habilitarBotao">Habilitado</button>';
  public exemploClassePropertyBinding: string =
    'public habilitarBotao: boolean = true;';
  public habilitarBotao: boolean = false;

  public exemploHTMLEventBinding = '<button (click)="evento()">Botão</button>';
  public exemploClasseEventBinding = `public evento() {alert('Clicou no Botão!')}`;

  public evento() {
    alert('Clicou no Botão!');
  }
}

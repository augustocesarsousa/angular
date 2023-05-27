import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss'],
})
export class DiretivasComponent {
  public exemploHTMLDiretivaNgIf: string =
    '<p *ngIf="condicionalNgIf">Exemplo *ngIf</p>';
  public exemploClasseDiretivaNgIf: string =
    'public condicionalNgIf: boolean = true;';
  public condicionalNgIf: boolean = true;

  public exemploHTMLDiretivaNgFor: string = `<ul><li *ngFor="let item of listaNgFor">{{ item }}</li></ul>`;
  public exemploClasseDiretivaNgFor: string = `public listaNgFor: Array<string> = ['Banana', 'Maçã', 'Laranja'];`;
  public listaNgFor: Array<string> = ['Banana', 'Maçã', 'Laranja'];
}

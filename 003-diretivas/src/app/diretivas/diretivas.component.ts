import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss'],
})
export class DiretivasComponent {
  public exemploHTMLDiretivaNgIf: string = `
  <p *ngIf="condicionalNgIf">Exemplo *ngIf</p>
  `;
  public exemploClasseDiretivaNgIf: string = `
  public condicionalNgIf: boolean = true;
  `;
  public condicionalNgIf: boolean = true;

  public exemploHTMLDiretivaNgFor: string = `
  <ul>
    <li *ngFor="let item of listaNgFor">{{ item }}</li>
  </ul>
  `;
  public exemploClasseDiretivaNgFor: string = `
  public listaNgFor: Array<string> = ['Banana', 'Maçã', 'Laranja'];
  `;
  public listaNgFor: Array<string> = ['Banana', 'Maçã', 'Laranja'];

  public exemploHTMLDiretivaNgSwitch: string = `
  <div [ngSwitch]="condicaoNgSwitch">
    <p *ngSwitchCase="true">Opção 1</p>
    <p *ngSwitchCase="false">Opção 2</p>
  </div>
  `;
  public exemploClasseDiretivaNgSwitch: string = `
  public condicaoNgFor: boolean = true;
  `;
  public condicaoNgSwitch: boolean = true;

  public exemploHTMLDiretivaNgClass: string = `
  <p [ngClass]="'exemplo-ng-class'">Exemplo ngClass</p>
  `;
  public exemploCSSDiretivaNgClass: string = `
  .exemplo-ng-class {
    color: red;
  }
  `;
}

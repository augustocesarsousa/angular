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

  public exemploHTMLNgStyle: string = `
  <div
    [ngStyle]="{
      height: exemploHeightNgStyle,
      width: exemploWidthNgStyle,
      background: exemploBlueNgStyle
    }"
  >
    <p [ngStyle]="{ color: exemploWhiteNgStyle }">Exemplo ngStyle</p>
  </div>
  `;
  public exemploClasseNgStyle: string = `
  public exemploHeightNgStyle: string = '150px';
  public exemploWidthNgStyle: string = '150px';
  public exemploBlueNgStyle: string = 'blue';
  public exemploWhiteNgStyle: string = 'white';
  `;
  public exemploHeightNgStyle: string = '150px';
  public exemploWidthNgStyle: string = '150px';
  public exemploBlueNgStyle: string = 'blue';
  public exemploWhiteNgStyle: string = 'white';

  public exemploHTMLNgModel: string = `
  <input type="text" [(ngModel)]="textoNgModel" />
  <span>&#32;{{ textoNgModel }}</span>
  `;
  public exemploClasseNgModel: string = `
  public textoNgModel: string = 'teste NgModel';
  `;
  public textoNgModel: string = 'teste NgModel';

  public exemploHTMLNgTemplate: string = `
  <ng-template ngFor let-item [ngForOf]="exemploNgTemplate">
    <p>{{ item }}</p>
  </ng-template>
  `;
  public exemploClasseNgTemplate: string = `
  public exemploNgTemplate: Array<string> = [
    'exemplo ng-template',
    'exemplo ng-template',
    'exemplo ng-template',
  ];
  `;
  public exemploNgTemplate: Array<string> = [
    'exemplo ng-template',
    'exemplo ng-template',
    'exemplo ng-template',
  ];

  public exemploHTMLNgContent: string = `
  <ng-content select="p"></ng-content>
  <ng-content select="hr"></ng-content>
  `;
  public exemploPaiNgContent: string = `
  <app-diretivas>
    <p>Exemplo ng-content</p>
    <hr />
  </app-diretivas>
  `;

  public exemploHTMLPipe: string = `
  <p>Pipe data = {{ exemploDataPipe | date : "dd/MM/yyyy" }}</p>
  <p>Pipe dinheiro = {{ exemploDinheiroPipe | currency }}</p>
  <p>Pipe upper case = {{ exemploUpperCasePipe | uppercase }}</p>
  `;
  public exemploClassePipe: string = `
  public exemploDataPipe: Date = new Date();
  public exemploDinheiroPipe: number = 999.9;
  public exemploUpperCasePipe: string = 'uppercase pipe';
  `;
  public exemploDataPipe: Date = new Date();
  public exemploDinheiroPipe: number = 999.9;
  public exemploUpperCasePipe: string = 'uppercase pipe';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss'],
})
export class InputComponentComponent {
  @Input() public exemploInput: string = '';
  public exemploFilhoInput: string = `
  @Input() public exemploInput: string = '';
  `;
  public exemploPaiInput: string = `
  <app-title></app-title>
  <app-input-component [exemploInput]="'Exemplo @Input()'"></app-input-component>
  <router-outlet></router-outlet>
  `;
}

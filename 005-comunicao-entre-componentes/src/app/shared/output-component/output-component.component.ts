import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-component',
  templateUrl: './output-component.component.html',
  styleUrls: ['./output-component.component.scss'],
})
export class OutputComponentComponent implements OnInit {
  public exemploClasseFilhoOutput: string = `
  @Output() public exemploFilhoOutput = new EventEmitter<string>();
  ngOnInit(): void {
    this.exemploFilhoOutput.emit('Exemplo @Output()');
  }
  `;
  public exemploClassePaiOutput: string = `
  public exemploPaiOutput: string = '';
  public setTexto(event: string): void {
    this.exemploPaiOutput = event;
  }
  `;
  public exemploHTMLPaiOutput: string = `
  <app-output-component (exemploFilhoOutput)="setTexto($event)"></app-output-component>  
  <h3>Resultado</h3>
  <p>{{ exemploPaiOutput }}</p>
  `;

  @Output() public exemploFilhoOutput = new EventEmitter<string>();
  ngOnInit(): void {
    this.exemploFilhoOutput.emit('Exemplo @Output()');
  }
}

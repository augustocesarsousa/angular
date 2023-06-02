import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '005-comunicao-entre-componentes';

  public exemploPaiOutput: string = '';
  public setTexto(event: string): void {
    this.exemploPaiOutput = event;
  }
}

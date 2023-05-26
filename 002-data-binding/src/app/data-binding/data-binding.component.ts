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
}

import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.scss'],
})
export class CicloDeVidaComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() public txtOnChanges: string = '';
  public valor: number = 1;

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

  /**
   * Este evento é executado sempre que um
   * valor de um controle de entrada dentro do
   * componente é alterado
   *
   * Sempre que um componente recebe um
   * dade através do @Imput() o ngOnChanges()
   * é invocado
   */
  ngOnChanges(): void {
    console.log('ngOnChanges foi executado!');
  }

  /**
   * Este evento é disparado sempre que as
   * propriedades de entrada de um
   * componente são verificadas
   */
  ngDoCheck(): void {
    console.log('ngDoCheck foi executado!');
  }

  /**
   * Este evento é executado quando o
   * Angular realiza qualquer projeção de
   * conteúdo nas visualizações do componente
   */
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit foi executado!');
  }

  /**
   * Este evento é executado sempre que o
   * conteúdo do componete é verificado pelo mecanismo
   * de detecção de alteração do Angular
   */
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked foi executado!');
  }

  /**
   * Este evento é executado quando a visualização
   * do componente foi totalmente inicializada
   */
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit foi executado!');
  }

  /**
   * Este evento é executado sempre que um
   * determinado componente foi verificado pelo
   * algorotmo de detecção do alterações do Angular
   */
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked foi executado!');
  }

  public adicionar(): void {
    this.valor += 1;
  }
}

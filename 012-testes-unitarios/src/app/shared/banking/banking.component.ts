import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent {
  private poupanca: number = 100;
  private carteira: number = 20;

  get getPoupanca(): number {
    return this.poupanca;
  }

  get getCarteira(): number {
    return this.carteira;
  }

  public setPoupanca(value: string): number | undefined {
    const valor = Number(value);
    if (isNaN(valor) || this.poupanca < valor || valor <= 0) {
      return;
    }
    this.poupanca -= valor;
    this.carteira += valor;
    return this.poupanca;
  }

  public setCarteira(value: string): number | undefined {
    const valor = Number(value);
    if (isNaN(valor) || this.carteira < valor || valor <= 0) {
      return;
    }
    this.poupanca += valor;
    this.carteira -= valor;
    return this.poupanca;
  }
}

import { Component } from '@angular/core';
import { Investment } from '../../models/investment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  public investimentList: Array<Investment> = [
    {
      name: 'Bradesco',
      value: 1000,
    },
    {
      name: 'Banco do Brasil',
      value: 1290,
    },
    {
      name: 'Caixa',
      value: 900,
    },
    {
      name: 'Santander',
      value: 3230,
    },
  ];
}

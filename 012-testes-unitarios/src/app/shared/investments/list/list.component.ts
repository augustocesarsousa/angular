import { Component, OnInit } from '@angular/core';
import { Investment } from '../../models/investment';
import { InvestmentsService } from '../../services/investments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
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

  constructor(private investmentsService: InvestmentsService) {}

  ngOnInit(): void {
    this.getInvestments();
  }

  public getInvestments(): void {
    this.investmentsService
      .getInvestments()
      .subscribe((res) => console.log(res));
  }
}

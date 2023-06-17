import { Component, OnInit } from '@angular/core';
import { Investment } from '../../models/investment';
import { InvestmentsService } from '../../services/investments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public investimentList: Array<Investment> = [];

  constructor(private investmentsService: InvestmentsService) {}

  ngOnInit(): void {
    this.getInvestments();
  }

  public getInvestments(): void {
    this.investmentsService.getInvestments().subscribe({
      next: (res) => (this.investimentList = res),
      error: (err) => console.log(err),
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/module/food';
import { ServerFoodListService } from 'src/app/services/server-food-list.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent implements OnInit {
  public list: Food | any;

  constructor(private serverFoodListService: ServerFoodListService) {}

  ngOnInit(): void {
    this.serverFoodListService.getList().subscribe({
      next: (res) => (this.list = res),
      error: (err) => console.log(err),
    });
  }
}

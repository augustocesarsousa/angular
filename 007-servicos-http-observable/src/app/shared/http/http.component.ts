import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/module/food';
import { ServerFoodListService } from 'src/app/services/server-food-list.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent implements OnInit {
  public list: Array<Food> = [];
  public foodItem: string = '';

  constructor(private serverFoodListService: ServerFoodListService) {}

  ngOnInit(): void {
    this.getList();
  }

  public getList(): void {
    this.serverFoodListService.getList().subscribe({
      next: (res) => (this.list = res),
      error: (err) => console.log(err),
    });
  }

  public addList(): void {
    if (this.foodItem !== '') {
      this.serverFoodListService.addList(this.foodItem).subscribe({
        next: (res) => this.getList(),
        error: (err) => console.log(err),
      });
      this.foodItem = '';
    }
  }

  public editItemList(id: number, value: string): void {
    this.serverFoodListService.editItemList(id, value).subscribe({
      next: (res) => this.getList(),
      error: (err) => console.log(err),
    });
  }
}

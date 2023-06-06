import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList: Array<string> = [];
  public foodItem: string = '';

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodList = this.foodListService.getList();
  }

  public addList(): void {
    if (this.foodItem !== '') {
      this.foodListService.addList(this.foodItem);
      this.foodItem = '';
    }
  }

  public removeList(index: number): void {
    this.foodListService.removeList(index);
  }
}

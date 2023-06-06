import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private list: Array<string> = ['Banana', 'Maçã', 'Laranja', 'Morango'];

  constructor() {}

  public getList(): Array<string> {
    return this.list;
  }

  public addList(value: string): void {
    this.list.push(value);
  }

  public removeList(index: number): void {
    this.list.splice(index, 1);
  }
}

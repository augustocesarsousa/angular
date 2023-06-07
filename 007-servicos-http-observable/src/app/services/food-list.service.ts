import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private list: Array<string> = ['Banana', 'Maçã', 'Laranja', 'Morango'];
  public eventEmiter = new EventEmitter();

  constructor() {}

  public getList(): Array<string> {
    return this.list;
  }

  public addList(value: string): void {
    this.list.push(value);
    this.listAlert(value);
  }

  public removeList(index: number): void {
    this.list.splice(index, 1);
  }

  public listAlert(value: string): void {
    return this.eventEmiter.emit(value);
  }
}

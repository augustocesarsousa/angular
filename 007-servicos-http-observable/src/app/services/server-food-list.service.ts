import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../module/food';

@Injectable({
  providedIn: 'root',
})
export class ServerFoodListService {
  private baseUrl: string = 'http://localhost:3000/list-food';

  constructor(private http: HttpClient) {}

  public getList(): Observable<Food> {
    return this.http.get<Food>(this.baseUrl).pipe(
      (res) => res,
      (err) => err
    );
  }
}

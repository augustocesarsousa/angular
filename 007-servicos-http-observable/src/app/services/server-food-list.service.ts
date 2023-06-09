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

  public getList(): Observable<Array<Food>> {
    return this.http.get<Array<Food>>(this.baseUrl).pipe(
      (res) => res,
      (err) => err
    );
  }

  public addList(value: string): Observable<Food> {
    return this.http.post<Food>(this.baseUrl, { nome: value }).pipe(
      (res) => res,
      (err) => err
    );
  }

  public editItemList(id: number, value: string): Observable<Food> {
    return this.http.put<Food>(`${this.baseUrl}/${id}`, { nome: value }).pipe(
      (res) => res,
      (err) => err
    );
  }

  public deleteItemList(id: number): Observable<Food> {
    return this.http.delete<Food>(`${this.baseUrl}/${id}`).pipe(
      (res) => res,
      (err) => err
    );
  }
}

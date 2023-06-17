import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Investment } from '../models/investment';

@Injectable({
  providedIn: 'root',
})
export class InvestmentsService {
  private baseUrl: string =
    'https://raw.githubusercontent.com/augustocesarsousa/angular/main/json-server/investiments.json';

  constructor(private http: HttpClient) {}

  public getInvestments(): Observable<Investment> {
    return this.http.get<Investment>(this.baseUrl).pipe(map((res) => res));
  }
}

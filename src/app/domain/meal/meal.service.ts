import { Injectable } from '@angular/core';
import {api} from "../../api";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {authOptions} from "../../util/service-util";
import {Meal} from "./meal";

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private static readonly url = `${api.baseUrl}/meal`;

  constructor(private httpClient: HttpClient) { }

  create(data: Meal): Observable<Meal> {
    return this.httpClient.post<Meal>(`${MealService.url}/create`, data, authOptions());
  }

  update(data: Meal): Observable<Meal> {
    return this.httpClient.put<Meal>(`${MealService.url}/update`, data, authOptions());
  }

  delete(data: Meal): Observable<void> {
    return this.httpClient.delete<void>(`${MealService.url}/${data.id}`, authOptions())
  }
}

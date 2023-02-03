import { Injectable } from '@angular/core';
import {api} from "../../api";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {authOptions} from "../../util/service-util";
import {Dish} from "./dish";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private static readonly url = `${api.baseUrl}/dish`;

  constructor(private httpClient: HttpClient) { }

  create(data: Dish): Observable<Dish> {
    return this.httpClient.post<Dish>(`${DishService.url}/create`, data, authOptions());
  }

  update(data: Dish): Observable<Dish> {
    return this.httpClient.put<Dish>(`${DishService.url}/update`, data, authOptions());
  }

  delete(data: Dish): Observable<void> {
    return this.httpClient.delete<void>(`${DishService.url}/${data.id}`, authOptions())
  }
}

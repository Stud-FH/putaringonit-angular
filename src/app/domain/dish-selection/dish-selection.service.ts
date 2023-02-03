import { Injectable } from '@angular/core';
import {api} from "../../api";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {authOptions} from "../../util/service-util";
import {DishSelection} from "./dish-selection";

@Injectable({
  providedIn: 'root'
})
export class DishSelectionService {

  private static readonly url = `${api.baseUrl}/program`;

  constructor(private httpClient: HttpClient) { }

  select(data: DishSelection): Observable<DishSelection> {
    return this.httpClient.post<DishSelection>(`${DishSelectionService.url}/${data.mealId}/select`, data, authOptions());
  }

  delete(data: DishSelection): Observable<void> {
    return this.httpClient.delete<void>(`${DishSelectionService.url}/${data.mealId}/delete`, authOptions())
  }
}

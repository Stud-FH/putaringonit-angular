import { Injectable } from '@angular/core';
import {api} from "../../api";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {authOptions, updateOptions} from "../../util/service-util";
import {Dish} from "./dish";
import {Profile} from "../profile/profile";
import {DishUpdateObject} from "./dish-update-object";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private static readonly url = `${api.baseUrl}/dish`;

  constructor(private httpClient: HttpClient) { }

  create(updateObject: DishUpdateObject, profile: Profile): Observable<Dish> {
    const query = updateObject.query
    return this.httpClient.post<Dish>(`${DishService.url}/${updateObject.mealId}/create`, query.data, authOptions(profile));
  }

  update(updateObject: DishUpdateObject, profile: Profile): Observable<Dish> {
    const query = updateObject.query
    return this.httpClient.put<Dish>(`${DishService.url}/${updateObject.id}/update`, query.data, updateOptions(query.updates, profile));
  }

  delete(data: Dish, profile: Profile): Observable<void> {
    return this.httpClient.delete<void>(`${DishService.url}/${data.id}/delete`, authOptions(profile))
  }
}

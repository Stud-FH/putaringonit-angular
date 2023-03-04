import { Injectable } from '@angular/core';
import {api} from "../../api";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {authOptions, updateOptions} from "../../util/service-util";
import {Meal} from "./meal";
import {Profile} from "../profile/profile";
import {MealUpdateObject} from "./meal-update-object";

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private static readonly url = `${api.baseUrl}/meal`;

  constructor(private httpClient: HttpClient) { }

  create(updateObject: MealUpdateObject, profile: Profile): Observable<Meal> {
    const query = updateObject.query
    return this.httpClient.post<Meal>(`${MealService.url}/${updateObject.programId}/create`, query.data, authOptions(profile));
  }

  update(updateObject: MealUpdateObject, profile: Profile): Observable<Meal> {
    const query = updateObject.query
    return this.httpClient.put<Meal>(`${MealService.url}/${updateObject.id}/update`, query.data, updateOptions(query.updates, profile));
  }

  delete(data: Meal, profile: Profile): Observable<void> {
    return this.httpClient.delete<void>(`${MealService.url}/${data.id}/delete`, authOptions(profile))
  }
}

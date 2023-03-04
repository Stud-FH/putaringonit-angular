import { Injectable } from '@angular/core';
import {api} from "../../api";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {authOptions} from "../../util/service-util";
import {DishSelection} from "./dish-selection";
import {Profile} from "../profile/profile";
import {DishSelectionUpdateObject} from "./dish-selection-update-object";

@Injectable({
  providedIn: 'root'
})
export class DishSelectionService {

  private static readonly url = `${api.baseUrl}/dish-selection`;

  constructor(private httpClient: HttpClient) { }

  select(updateObject: DishSelectionUpdateObject, profile: Profile): Observable<DishSelection> {
    const query = updateObject.query;
    return this.httpClient.post<DishSelection>(`${DishSelectionService.url}/${updateObject.meal.id}/select`, query.data, authOptions(profile));
  }

  delete(data: DishSelection, profile: Profile): Observable<void> {
    return this.httpClient.delete<void>(`${DishSelectionService.url}/${data.mealId}/delete`, authOptions(profile))
  }
}

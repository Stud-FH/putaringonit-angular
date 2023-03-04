import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {api} from "../../api";
import {Wish} from "./wish";
import {authOptions, updateOptions} from "../../util/service-util";
import {Profile} from "../profile/profile";
import {WishUpdateObject} from "./wish-update-object";

@Injectable({
  providedIn: 'root'
})
export class WishService {

  private static readonly url = `${api.baseUrl}/wish`;

  constructor(private httpClient: HttpClient) { }

  create(updateObject: WishUpdateObject, profile: Profile): Observable<Wish> {
    const query = updateObject.query;
    return this.httpClient.post<Wish>(`${WishService.url}/create`, query.data, authOptions(profile));
  }

  update(updateObject: WishUpdateObject, profile: Profile): Observable<Wish> {
    const query = updateObject.query;
    return this.httpClient.put<Wish>(`${WishService.url}/${updateObject.id}/update`, query.data, updateOptions(query.updates, profile));
  }

  delete(data: Wish, profile: Profile): Observable<void> {
    return this.httpClient.delete<void>(`${WishService.url}/${data.id}/delete`, authOptions(profile))
  }
}

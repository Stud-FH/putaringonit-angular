import { Injectable } from '@angular/core';
import {api} from "../../api";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gift} from "./gift";
import {GiftUpdateObject} from "./gift-update-object";
import {authOptions, updateOptions} from "../../util/service-util";
import {Profile} from "../profile/profile";

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  private static readonly url = `${api.baseUrl}/gift`;

  constructor(private httpClient: HttpClient) { }

  create(data: GiftUpdateObject, profile: Profile): Observable<Gift> {
    const query = data.query;
    return this.httpClient.post<Gift>(`${GiftService.url}/${data.wishId}/create`, query.data, authOptions(profile));
  }

  update(data: GiftUpdateObject, profile: Profile): Observable<Gift> {
    const query = data.query;
    return this.httpClient.put<Gift>(`${GiftService.url}/${data.wishId}/update`, query.data, updateOptions(query.updates, profile));
  }

  delete(data: GiftUpdateObject, profile: Profile): Observable<Gift> {
    return this.httpClient.delete<Gift>(`${GiftService.url}/${data.wishId}/delete`, authOptions(profile));
  }
}

import { Injectable } from '@angular/core';
import {api} from "../../api";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gift} from "./gift";
import {GiftUpdateObject} from "./gift-update-object";
import {authOptions, updateOptions} from "../../util/service-util";

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  private static readonly url = `${api.baseUrl}/gift`;

  constructor(private httpClient: HttpClient) { }

  create(data: Gift): Observable<Gift> {
    const query = data.updateQuery;
    return this.httpClient.post<Gift>(`${GiftService.url}/create/${data.wishId}`, query.data, authOptions(data.donorId));
  }

  update(data: GiftUpdateObject): Observable<Gift> {
    const query = data.updateQuery;
    return this.httpClient.put<Gift>(`${GiftService.url}/update/${data.wishId}`, query.data, updateOptions(query.updates, data.donorId));
  }
}

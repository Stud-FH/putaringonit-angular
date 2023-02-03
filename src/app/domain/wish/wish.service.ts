import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {api} from "../../api";
import {Wish} from "./wish";
import {authOptions} from "../../util/service-util";

@Injectable({
  providedIn: 'root'
})
export class WishService {

  private static readonly url = `${api.baseUrl}/wish`;

  constructor(private httpClient: HttpClient) { }

  create(data: Wish): Observable<Wish> {
    return this.httpClient.post<Wish>(`${WishService.url}/create`, data, authOptions());
  }

  update(data: Wish): Observable<Wish> {
    return this.httpClient.put<Wish>(`${WishService.url}/update`, data, authOptions());
  }

  delete(data: Wish): Observable<void> {
    return this.httpClient.delete<void>(`${WishService.url}/${data.id}`, authOptions())
  }
}

import { Injectable } from '@angular/core';
import {api} from "../../api";
import {HttpClient} from "@angular/common/http";
import {Profile} from "./profile";
import {Observable} from "rxjs";
import {authOptions, updateOptions} from "../../util/service-util";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private static readonly url = `${api.baseUrl}/profile`;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Profile[]> {
    return this.httpClient.get<Profile[]>(`${ProfileService.url}/all`, authOptions());
  }

  update(profile: Profile): Observable<Profile> {
    const query = profile.updateQuery;
    return this.httpClient.put<Profile>(
      `${ProfileService.url}/${profile.identifier}/update`,
      query.data, updateOptions(query.updates)
    );
  }
}

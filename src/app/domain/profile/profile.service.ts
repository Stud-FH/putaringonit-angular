import { Injectable } from '@angular/core';
import {api} from "../../api";
import {HttpClient} from "@angular/common/http";
import {Profile} from "./profile";
import {Observable} from "rxjs";
import {tokenOptions, updateOptions} from "../../util/service-util";
import {ProfileUpdateObject} from "./profile-update-object";
import {map} from "rxjs/operators";
import {Context} from "../context";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private static readonly url = `${api.baseUrl}/profile`;

  constructor(private httpClient: HttpClient) { }

  getAll(context: Context): Observable<Profile[]> {
    return this.httpClient.get<Profile[]>(`${ProfileService.url}`, tokenOptions()).pipe(
      map(list => list.map(raw => new Profile(context, raw)))
    );
  }

  update(updateObject: ProfileUpdateObject, profile: Profile): Observable<Profile> {
    const query = updateObject.query;
    return this.httpClient.put<Profile>(
      `${ProfileService.url}/${updateObject.id}/update`,
      query.data, updateOptions(query.updates, profile)
    );
  }
}

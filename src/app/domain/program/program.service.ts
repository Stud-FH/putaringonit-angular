import { Injectable } from '@angular/core';
import {api} from "../../api";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Program} from "./program";
import {authOptions, updateOptions} from "../../util/service-util";
import {ProgramUpdateObject} from "./program-update-object";
import {Profile} from "../profile/profile";

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private static readonly url = `${api.baseUrl}/program`;

  constructor(private httpClient: HttpClient) { }

  create(updateObject: ProgramUpdateObject, profile: Profile): Observable<Program> {
    const query = updateObject.query;
    return this.httpClient.post<Program>(`${ProgramService.url}/create`, query.data, authOptions(profile));
  }

  update(updateObject: ProgramUpdateObject, profile: Profile): Observable<Program> {
    const query = updateObject.query;
    return this.httpClient.put<Program>(`${ProgramService.url}/${updateObject.id}/update`, query.data, updateOptions(query.updates, profile));
  }

  delete(data: Program, profile: Profile): Observable<void> {
    return this.httpClient.delete<void>(`${ProgramService.url}/${data.id}/delete`, authOptions(profile))
  }
}

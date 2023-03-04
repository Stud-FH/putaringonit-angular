import { Injectable } from '@angular/core';
import {api} from "../../api";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Invitation} from "./invitation";
import {Profile} from "../profile/profile";
import {tokenOptions, updateOptions} from "../../util/service-util";
import {InvitationUpdateObject} from "./invitation-update-object";

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  private static readonly url = `${api.baseUrl}/invitation`;

  constructor(private httpClient: HttpClient) { }

  create(programId: number, profileId: string): Observable<Invitation> {
    return this.httpClient.post<Invitation>(`${InvitationService.url}/${programId}/${profileId}/create`, {}, tokenOptions());
  }

  delete(programId: number, profileId: string): Observable<void> {
    return this.httpClient.delete<void>(`${InvitationService.url}/${programId}/${profileId}/delete`, tokenOptions());
  }

  update(updateObject: InvitationUpdateObject, profile: Profile): Observable<Invitation> {
    const query = updateObject.query;
    return this.httpClient.put<Invitation>(`${InvitationService.url}/${updateObject.programId}/${updateObject.profileId}/update`, query.data, updateOptions(query.updates, profile));
  }
}

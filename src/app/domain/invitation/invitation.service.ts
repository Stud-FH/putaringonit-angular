import { Injectable } from '@angular/core';
import {api} from "../../api";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Invitation} from "./invitation";
import {Profile} from "../profile/profile";
import {Program} from "../program/program";
import {authOptions, updateOptions} from "../../util/service-util";

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  private static readonly url = `${api.baseUrl}/invitation`;

  constructor(private httpClient: HttpClient) { }

  create(profile: Profile, program: Program): Observable<Invitation> {
    return this.httpClient.post<Invitation>(`${InvitationService.url}/create/${program.id}`,{}, authOptions(profile.identifier!));
  }

  delete(profile: Profile, program: Program): Observable<void> {
    return this.httpClient.delete<void>(`${InvitationService.url}/delete/${program.id}`, authOptions(profile.identifier!));
  }

  update(data: Invitation): Observable<Invitation> {
    const query = data.updateQuery;
    return this.httpClient.put<Invitation>(`${InvitationService.url}/update/${data.programId}`, query.data, updateOptions(query.updates, data.profileId!));
  }
}

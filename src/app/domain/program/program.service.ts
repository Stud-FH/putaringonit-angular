import { Injectable } from '@angular/core';
import {api} from "../../api";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Program} from "./program";
import {authOptions} from "../../util/service-util";

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private static readonly url = `${api.baseUrl}/program`;

  constructor(private httpClient: HttpClient) { }

  create(data: Program): Observable<Program> {
    return this.httpClient.post<Program>(`${ProgramService.url}/create`, data, authOptions());
  }

  update(data: Program): Observable<Program> {
    return this.httpClient.put<Program>(`${ProgramService.url}/update`, data, authOptions());
  }

  delete(data: Program): Observable<void> {
    return this.httpClient.delete<void>(`${ProgramService.url}/${data.id}`, authOptions())
  }
}

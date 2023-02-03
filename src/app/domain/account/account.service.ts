import {Injectable} from '@angular/core';
import {Account} from "./account";
import {api} from "../../api";
import {HttpClient} from "@angular/common/http";
import {Observable, of, tap} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private static readonly url = `${api.baseUrl}/account`;

  constructor(private httpClient: HttpClient) { }

  loginWithToken(token: string): Observable<Account> {
    return this.httpClient.get<Account>(`${AccountService.url}`, {params:{token}})
      .pipe(
        map(raw => new Account(raw))
      );
  }

  loginWithCode(code: string): Observable<Account> {
    return this.httpClient.post<Account>(`${AccountService.url}/code`, {code})
      .pipe(
        map(raw => new Account(raw)),
      );
  }

  loginWithPassword(username: string, password: string): Observable<Account> {
    return this.httpClient.post<Account>(`${AccountService.url}/password`, {username, password})
      .pipe(
        map(raw => new Account(raw))
      );
  }

  existsUsername(username: string): Observable<boolean> {
    if (!username) return of(false);
    return this.httpClient.get<boolean>(`${AccountService.url}/username/${username}`);
  }
}

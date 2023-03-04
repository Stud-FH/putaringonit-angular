import {Profile} from "../domain/profile/profile";
import {HttpHeaders} from "@angular/common/http";

const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

export function defaultOptions(): {params: {[key: string]: any}, headers: HttpHeaders} {
  return {
    headers,
    params: {}
  };
}

export function tokenOptions(token?: string): {params: {[key: string]: any}, headers: HttpHeaders} {
  if (!token) token = localStorage.getItem('token') ?? '';
  return {
    headers,
    params: {token}
  };
}

export function authOptions(profile: Profile): {params: {[key: string]: any}, headers: HttpHeaders} {
  const token = localStorage.getItem('token') ?? '';
  return {
    headers,
    params: {token, profile: profile.identifier},
  };
}

export function updateOptions(updates: string[], profile: Profile): {params: {[key: string]: any}, headers: HttpHeaders} {
  const token = localStorage.getItem('token') ?? '';
  return {
    headers,
    params: {updates, token, profile: profile.identifier}
  };
}

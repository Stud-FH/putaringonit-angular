import {Profile} from "../domain/profile/profile";

export function tokenOptions(): {params: {[key: string]: any}} {
  const token = localStorage.getItem('token') ?? '';
  return {
    params: {token}
  };
}

export function authOptions(profile: Profile): {params: {[key: string]: any}} {
  const token = localStorage.getItem('token') ?? '';
  return {
    params: {token, profile: profile.identifier}
  };
}

export function updateOptions(updates: string[], profile: Profile): {params: {[key: string]: any}} {
  const token = localStorage.getItem('token') ?? '';
  return {
    params: {updates, token, profile: profile.identifier}
  };
}

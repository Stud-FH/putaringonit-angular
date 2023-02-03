export function authOptions(profileIdentifier?: string): {params: {[key: string]: any}} {
  const token = localStorage.getItem('token') ?? '';
  return {
    params: {token, profile: profileIdentifier}
  };
}

export function updateOptions(updates: string[], profileIdentifier?: string): {params: {[key: string]: any}} {
  const token = localStorage.getItem('token') ?? '';
  return {
    params: {updates, token, profile: profileIdentifier}
  };
}

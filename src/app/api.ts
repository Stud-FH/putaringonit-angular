import {isDevMode} from "@angular/core"

export const api = {
  baseUrl: isDevMode()? 'api' : 'https://putaringonit-java.oa.r.appspot.com/api'
}

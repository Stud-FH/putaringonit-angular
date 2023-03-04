import {isDevMode} from "@angular/core"

export const api = {
  baseUrl: isDevMode()? 'http://localhost:8080' : 'https://putaringonit.herokuapp.com/'
}

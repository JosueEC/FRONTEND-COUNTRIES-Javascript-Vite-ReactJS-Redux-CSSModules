const ROUTES = Object.freeze({
  LANDING: '/',
  HOME: '/home',
  DETAIL: '/detail/:countryID',
  NOTFOUND: '/notfound',
  FORM: '/form'
})

const API = Object.freeze({
  DOMAIN: 'http://localhost:3001'
})

export {
  ROUTES,
  API
}

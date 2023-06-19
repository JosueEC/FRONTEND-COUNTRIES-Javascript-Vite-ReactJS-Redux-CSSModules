import dotenv from 'dotenv'
dotenv.config()

const ROUTES = Object.freeze({
  LANDING: '/',
  HOME: '/home',
  DETAIL: '/detail/:countryID',
  NOTFOUND: '/notfound',
  FORM: '/form'
})

const API = Object.freeze({
  DOMAIN: process.env.REACT_APP_API
})

export {
  ROUTES,
  API
}

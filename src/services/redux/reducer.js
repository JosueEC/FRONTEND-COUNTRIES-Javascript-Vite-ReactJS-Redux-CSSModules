import { GET_COUNTRIES, GET_COUNTRIES_BY_NAME } from './actions'

const initialState = {
  countries: [],
  auxCountries: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        auxCountries: action.payload
      }
    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        countries: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export default rootReducer

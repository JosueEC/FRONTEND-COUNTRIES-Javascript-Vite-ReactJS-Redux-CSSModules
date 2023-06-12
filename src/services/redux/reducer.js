import { GET_COUNTRIES, GET_COUNTRIES_BY_NAME, FILTER_COUNTRIES_BY_CONTINENT } from './actions'

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
    case FILTER_COUNTRIES_BY_CONTINENT:
      return {
        ...state,
        countries: [...state.auxCountries].filter((country) => country.continent === action.payload)
      }
    default:
      return {
        ...state
      }
  }
}

export default rootReducer

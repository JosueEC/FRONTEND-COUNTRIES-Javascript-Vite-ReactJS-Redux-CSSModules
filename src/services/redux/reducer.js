import { GET_COUNTRIES, GET_COUNTRIES_BY_NAME, FILTER_COUNTRIES_BY_CONTINENT, ORDER_COUNTRIES_HIGHER_POPULATION, ORDER_COUNTRIES_LOWER_POPULATION, ORDER_COUNTRIES_A_TO_Z, ORDER_COUNTRIES_Z_TO_A } from './actions'

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
    case ORDER_COUNTRIES_HIGHER_POPULATION:
      return {
        ...state,
        countries: [...state.auxCountries].sort((a, b) => b.population - a.population)
      }
    case ORDER_COUNTRIES_LOWER_POPULATION:
      return {
        ...state,
        countries: [...state.auxCountries].sort((a, b) => a.population - b.population)
      }
    case ORDER_COUNTRIES_A_TO_Z:
      return {
        ...state,
        countries: [...state.auxCountries].sort((a, b) => {
          if (a.name > b.name) return 1
          if (a.name < b.name) return -1
          return 0
        })
      }
    case ORDER_COUNTRIES_Z_TO_A:
      return {
        ...state,
        countries: [...state.auxCountries].sort((a, b) => {
          if (a.name < b.name) return 1
          if (a.name > b.name) return -1
          return 0
        })
      }
    default:
      return {
        ...state
      }
  }
}

export default rootReducer

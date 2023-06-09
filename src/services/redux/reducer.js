import {
  GET_COUNTRIES,
  GET_COUNTRIES_FILTERED,
  GET_COUNTRIES_BY_NAME,
  FILTER_COUNTRIES_BY_CONTINENT,
  ORDER_COUNTRIES_HIGHER_POPULATION,
  ORDER_COUNTRIES_LOWER_POPULATION,
  ORDER_COUNTRIES_A_TO_Z,
  ORDER_COUNTRIES_Z_TO_A,
  ADD_COUNTRY_FORM,
  REMOVE_COUNTRY_FORM
} from './actions'

const initialState = {
  countries: [],
  auxCountries: [],
  countriesFiltered: [],
  selectedCountriesForm: []
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
    case GET_COUNTRIES_FILTERED:
      return {
        ...state,
        countries: [...state.countriesFiltered]
      }
    case FILTER_COUNTRIES_BY_CONTINENT:
      return {
        ...state,
        countries: [...state.auxCountries].filter((country) => country.continent === action.payload),
        countriesFiltered: [...state.countries]
      }
    case ORDER_COUNTRIES_HIGHER_POPULATION:
      return {
        ...state,
        countries: [...state.countries].sort((a, b) => b.population - a.population)
      }
    case ORDER_COUNTRIES_LOWER_POPULATION:
      return {
        ...state,
        countries: [...state.countries].sort((a, b) => a.population - b.population)
      }
    case ORDER_COUNTRIES_A_TO_Z:
      return {
        ...state,
        countries: [...state.countries].sort((a, b) => {
          if (a.name > b.name) return 1
          if (a.name < b.name) return -1
          return 0
        })
      }
    case ORDER_COUNTRIES_Z_TO_A:
      return {
        ...state,
        countries: [...state.countries].sort((a, b) => {
          if (a.name < b.name) return 1
          if (a.name > b.name) return -1
          return 0
        })
      }
    case ADD_COUNTRY_FORM:
      return {
        ...state,
        selectedCountriesForm: [...state.selectedCountriesForm, action.payload]
      }
    case REMOVE_COUNTRY_FORM:
      return {
        ...state,
        selectedCountriesForm: state.selectedCountriesForm.filter((countryID) => countryID !== action.payload)
      }
    default:
      return {
        ...state
      }
  }
}

export default rootReducer

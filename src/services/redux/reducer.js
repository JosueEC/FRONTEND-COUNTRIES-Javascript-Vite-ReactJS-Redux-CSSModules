import {
  GET_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  FILTER_COUNTRIES_BY_CONTINENT,
  ORDER_COUNTRIES_HIGHER_POPULATION,
  ORDER_COUNTRIES_LOWER_POPULATION,
  ORDER_COUNTRIES_A_TO_Z,
  ORDER_COUNTRIES_Z_TO_A,
  ADD_COUNTRY_FORM,
  REMOVE_COUNTRY_FORM,
  SET_FIELD_FORM
} from './actions'

const initialState = {
  countries: [],
  auxCountries: [],
  activityForm: {
    name: '',
    difficulty: 0,
    duration: 0,
    season: '',
    image: '',
    countries: []
  }
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
        activityForm: addCountryForm(state.activityForm, action.payload)
      }
    case REMOVE_COUNTRY_FORM:
      return {
        ...state,
        activityForm: removeCountryForm(state.activityForm, action.payload)
      }
    case SET_FIELD_FORM:
      return {
        ...state,
        activityForm: setFieldForm(state.activityForm, action.payload)
      }
    default:
      return {
        ...state
      }
  }
}

function setFieldForm (stateForm, { fieldName, fieldValue }) {
  const newState = { ...stateForm }
  newState[fieldName] = fieldValue

  console.log(newState)
  return newState
}

function addCountryForm (stateForm, countryID) {
  const newState = { ...stateForm }
  newState.countries.push(countryID)

  console.info(newState)
  return newState
}

function removeCountryForm (stateForm, countryID) {
  const newState = { ...stateForm }
  newState.countries = newState.countries.filter((id) => id !== countryID)

  console.info(newState)
  return newState
}

export default rootReducer

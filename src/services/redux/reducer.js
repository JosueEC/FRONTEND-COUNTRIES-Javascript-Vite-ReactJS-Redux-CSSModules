import { GET_COUNTRIES } from './actions'

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
  }
}

export default rootReducer

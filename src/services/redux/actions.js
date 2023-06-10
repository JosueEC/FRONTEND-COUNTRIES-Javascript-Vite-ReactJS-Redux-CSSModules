import { API } from '../../utils/constants'

export const GET_COUNTRIES = 'GET_COUNTRIES'

const getCountries = () => {
  const URL = `${API.DOMAIN}/countries`

  return function (dispatch) {
    fetch(URL)
      .then((response) => {
        if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`)
        return response.json()
      })
      .then((results) => {
        console.info('fetch-all-countries')
        dispatch({ type: GET_COUNTRIES, payload: results.data })
      })
      .catch((error) => console.error(error.message))
  }
}

export {
  getCountries
}

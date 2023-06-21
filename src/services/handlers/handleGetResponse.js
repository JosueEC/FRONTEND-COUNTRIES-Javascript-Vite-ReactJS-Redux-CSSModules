// import Swal from 'sweetalert2'
import { GET_COUNTRIES } from '../redux/actions'

const handleGetResponse = (results, dispatch) => {
  const status = results.status

  if (status !== 'FOUND') {
    alert('Something went wrong. Unable to establish connection to the server.')
    // Swal.fire({
    //   icon: 'error',
    //   title: 'Oops...',
    //   text: 'Something went wrong. Unable to establish connection to the server'
    // })
  } else {
    dispatch({ type: GET_COUNTRIES, payload: results.data })
  }
}

export { handleGetResponse }

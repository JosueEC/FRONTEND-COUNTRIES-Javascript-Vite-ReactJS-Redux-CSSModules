import Swal from 'sweetalert2'

const handlePostResponse = (results) => {
  const status = results.status
  const error = results.error || 'Something went wrong!'
  if (status === 'CREATED') {
    Swal.fire(
      'Proccess Completed',
      'The activity has been created',
      'success'
    )
  } else if (status === 'BAD REQUEST') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error
    })
  }
}

export { handlePostResponse }

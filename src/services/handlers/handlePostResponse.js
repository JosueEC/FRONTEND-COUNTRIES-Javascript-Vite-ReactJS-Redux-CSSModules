// import Swal from 'sweetalert2'

const handlePostResponse = (results) => {
  const status = results.status
  const error = results.error || 'Something went wrong!'
  if (status === 'CREATED') {
    alert('The activity has been created')
    // Swal.fire(
    //   'Proccess Completed',
    //   'The activity has been created',
    //   'success'
    // )
  } else if (status === 'BAD REQUEST') {
    alert(error)
    // Swal.fire({
    //   icon: 'error',
    //   title: 'Oops...',
    //   text: error
    // })
  }
}

export { handlePostResponse }

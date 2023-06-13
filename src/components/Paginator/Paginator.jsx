/* eslint-disable react/prop-types */
import './Paginator.css'

export default function Paginator ({ totalPages, pages, currentPage, setCurrentPage }) {
  function handlePreviousPage () {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  function handleNextPage () {
    if (currentPage !== totalPages) setCurrentPage(currentPage + 1)
  }

  return (
    <div className='containerPaginator'>
      <span onClick={handlePreviousPage}>Previous</span>
      <div>
        {
        pages.map((page) => {
          return (
            <span
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`${currentPage === page ? 'active' : ''}`}
            >{`${page} | `}
            </span>
          )
        })
      }
      </div>
      <span onClick={handleNextPage}>Next</span>
    </div>
  )
}

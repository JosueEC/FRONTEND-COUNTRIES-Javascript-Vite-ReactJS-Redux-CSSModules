/* eslint-disable react/prop-types */
import { usePaginator } from '../../hooks/usePaginator'
import './Paginator.css'

export default function Paginator ({ totalPages, pages, currentPage, setCurrentPage }) {
  const {
    maxLimitPage,
    minLimitPage,
    handlePreviousPage,
    handleNextPage
  } = usePaginator(5, currentPage, setCurrentPage, totalPages)

  return (
    <div className='containerPaginator'>
      <span onClick={handlePreviousPage} className='paginatorItem'>{'<'}</span>
      <div>
        {
        pages.map((page) => {
          if (page < maxLimitPage + 1 && page > minLimitPage) {
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`${currentPage === page ? 'paginatorItem paginatorItem--active' : 'paginatorItem'}`}
              >{page}
              </button>
            )
          } else {
            return null
          }
        })
      }
      </div>
      <span onClick={handleNextPage} className='paginatorItem'>{'>'}</span>
    </div>
  )
}

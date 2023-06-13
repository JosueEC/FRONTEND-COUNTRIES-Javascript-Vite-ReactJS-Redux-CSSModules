/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Paginator.css'

export default function Paginator ({ totalPages, pages, currentPage, setCurrentPage }) {
  const pageNumberLimit = 5
  const [maxNumberPage, setMaxNumberPage] = useState(5)
  const [minNumberPage, setMinNumberPage] = useState(0)

  function handlePreviousPage () {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
      if (Number((currentPage - 1) % pageNumberLimit) === 0) {
        setMaxNumberPage(maxNumberPage - pageNumberLimit)
        setMinNumberPage(minNumberPage - pageNumberLimit)
      }
    }
  }

  function handleNextPage () {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1)
      if (currentPage + 1 > maxNumberPage) {
        setMaxNumberPage(maxNumberPage + pageNumberLimit)
        setMinNumberPage(minNumberPage + pageNumberLimit)
      }
    }
  }

  return (
    <div className='containerPaginator'>
      <span onClick={handlePreviousPage} className='paginatorItem'>{'<'}</span>
      <div>
        {
        pages.map((page) => {
          if (page < maxNumberPage + 1 && page > minNumberPage) {
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

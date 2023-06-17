import { useState } from 'react'

export const usePaginator = (visiblePages, currentPage, setCurrentPage, totalPages) => {
  const [maxLimitPage, setMaxLimitPage] = useState(visiblePages)
  const [minLimitPage, setMinLimitPage] = useState(0)

  function handlePreviousPage () {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
      if (Number((currentPage - 1) % visiblePages) === 0) {
        setMaxLimitPage(maxLimitPage - visiblePages)
        setMinLimitPage(minLimitPage - visiblePages)
      }
    }
  }

  function handleNextPage () {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1)
      if ((currentPage + 1) > maxLimitPage) {
        setMaxLimitPage(maxLimitPage + visiblePages)
        setMinLimitPage(minLimitPage + visiblePages)
      }
    }
  }

  return {
    maxLimitPage,
    minLimitPage,
    handlePreviousPage,
    handleNextPage
  }
}

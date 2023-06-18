import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

export const usePaginate = (data, getFunction, elementsPerPage) => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(data.length / elementsPerPage)
  const pages = [...Array(totalPages + 1).keys()].slice(1)

  const lastIndexPage = currentPage * elementsPerPage
  const firstIndexPage = lastIndexPage - elementsPerPage

  const visibleData = data.slice(firstIndexPage, lastIndexPage)

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getFunction())
    }
    setCurrentPage(1)
  }, [data])

  return {
    totalPages,
    pages,
    currentPage,
    setCurrentPage,
    visibleData
  }
}

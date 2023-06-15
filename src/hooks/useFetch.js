/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

export function useFetch (URL) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`)
        return response.json()
      })
      .then((results) => {
        console.info('fetch-data-API')
        setData(results.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error.message)
        setIsLoading(false)
      })
  }, [])

  return { data, isLoading }
}

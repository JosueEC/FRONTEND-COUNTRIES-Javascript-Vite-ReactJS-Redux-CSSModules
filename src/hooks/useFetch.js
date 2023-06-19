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
        setData(results.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error.message)
        setIsLoading(false)
      })
    return function clearData () {
      setData([])
    }
  }, [])

  return { data, isLoading }
}

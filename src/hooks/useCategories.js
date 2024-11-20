import { useEffect, useState } from 'react'
import { fetchCategories } from '../services/categoryServices'

export function useCategories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await fetchCategories()

        //adds the Option of all  Categories
        data.unshift({ slug: 'all', name: 'All' })

        setCategories(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  return { categories, loading, error }
}

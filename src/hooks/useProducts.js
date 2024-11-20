import { useEffect } from 'react'
import { useState } from 'react'
import {
  fetchProduct,
  fetchProductByCategory,
} from '../services/productServices'
export function useProducts({ category = 'all' }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        if (category !== 'all') {
          const { products } = await fetchProductByCategory({ category })
          setProducts(products)
          return
        }
        const { products } = await fetchProduct()
        setProducts(products)
      } catch (error) {
        setError(error)
      } finally {
        setLoading
      }
    }
    fetchData()
  }, [category])
  return { products, loading, error }
}

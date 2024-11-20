import { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

export function useFilter() {
  const { filters, setFilters } = useContext(FilterContext)
  const updateCategory = ({ target }) => {
    const category = target.value
    setFilters({ ...filters, category })
  }
  const updateMinPrice = ({ target }) => {
    const minPrice = target.value !== '' ? parseInt(target.value) : ''
    if (minPrice < 0) return
    setFilters({ ...filters, minPrice })
  }
  const updateMaxPrice = ({ target }) => {
    const maxPrice = target.value !== '' ? parseInt(target.value) : ''
    if (maxPrice < 0) return
    setFilters({ ...filters, maxPrice })
  }
  const filteredProducts = ({ products }) => {
    const { category, minPrice, maxPrice } = filters

    if (category === 'all' && minPrice === 0) return products

    return products.filter((product) => {
      if (
        product.price > minPrice &&
        product.price < maxPrice &&
        (category === 'all' || product.category === category)
      ) {
        return product
      }
    })
  }

  return {
    filters,
    updateCategory,
    updateMinPrice,
    updateMaxPrice,
    filteredProducts,
  }
}

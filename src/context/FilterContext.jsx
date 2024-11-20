import { createContext, useEffect, useState } from 'react'

export const FilterContext = createContext()

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState(() => loadFiltersFromLocal())
  function loadFiltersFromLocal() {
    const savedFilters = localStorage.getItem('filters')
    if (savedFilters) {
      return JSON.parse(savedFilters)
    }
    return { category: 'all', minPrice: 0, maxPrice: undefined }
  }
  useEffect(() => {
    localStorage.setItem('filters', JSON.stringify(filters))
  }, [filters])
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  )
}

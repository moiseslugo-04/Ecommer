import './Filter.css'
import { useCategories } from '../../hooks/useCategories'
import { useFilter } from '../../hooks/useFilter'
export function Filter() {
  const { filters, updateMinPrice, updateMaxPrice } = useFilter()
  const { minPrice, maxPrice } = filters
  return (
    <form className='filter'>
      <label>
        Filter By Category
        <Select />
      </label>
      <label>
        Filter By Price
        <div>
          <input
            type='number'
            name='minPrice'
            min='0'
            placeholder='Min:$0'
            value={minPrice}
            onChange={updateMinPrice}
          />
          <input
            type='number'
            name='maxPrice'
            min='0'
            value={maxPrice}
            placeholder='Max:$99'
            onChange={updateMaxPrice}
          />
        </div>
      </label>
      <label>
        Sort
        <input type='checkbox' />
      </label>
    </form>
  )
}
function Select() {
  const { categories } = useCategories()
  const { filters, updateCategory } = useFilter()
  const { category } = filters
  return (
    <select name='category' onChange={updateCategory} value={category}>
      {categories.map(({ slug, name }) => (
        <Option key={slug} slug={slug}>
          {name}
        </Option>
      ))}
    </select>
  )
}
function Option({ children, slug }) {
  return (
    <option id={slug} value={slug}>
      {children}
    </option>
  )
}

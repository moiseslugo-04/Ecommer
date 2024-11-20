import { Button } from '../../components/Button/Button'
import { AddToCart } from '../../components/Icons/Icons'
import { useCart } from '../../context/CartContext'
import { useFilter } from '../../hooks/useFilter'
import { useProducts } from '../../hooks/useProducts'
import './Products.css'
export function Products() {
  const { filters, filteredProducts } = useFilter()
  const { products } = useProducts({ category: filters.category })
  const filtered = filteredProducts({ products })
  const hasProducts = filtered.length > 0
  return hasProducts ? <ProductList products={filtered} /> : <NotResults />
}

function ProductList({ products }) {
  return (
    <div className='products'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
function Product({ product }) {
  const { state, dispatch } = useCart()
  const { title, description, thumbnail, price, id } = product
  const handleClick = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } })
  }
  return (
    <li id={id} className='product-item'>
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>${price}</h4>
      <div className='buttons'>
        <span className='btn-add' onClick={handleClick}>
          <AddToCart />
        </span>
        <Button>Show Details</Button>
      </div>
    </li>
  )
}

function NotResults() {}

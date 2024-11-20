import { Button } from '../../components/Button/Button'
import {
  PlusQuantity,
  UnlessQuantity,
  CloseIcon,
  DeleteIcon,
} from '../../components/Icons/Icons'
import { useCart } from '../../context/CartContext'
import './Cart.css'
export function Cart() {
  const { state, dispatch } = useCart()
  const { cartItems, isOpen } = state
  console.log(state)
  const total = parseInt(
    cartItems.reduce((acc, product) => acc + product.price, 0)
  )
  const handleToggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' })
  }
  return (
    <div
      className='shopping-cart'
      style={isOpen ? { display: 'flex' } : { display: 'none' }}
    >
      <div className='header-cart'>
        <h2 className='cart-title'>Shopping Cart</h2>
        <Button onClick={handleToggleCart}>
          <CloseIcon />
        </Button>
      </div>
      <div className='cart-items'>
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <div className='cart-summary'>
        <p>
          Total: <span className='total-price'>${total.toFixed(2)}</span>
        </p>
        <button className='checkout-btn'>Checkout</button>
      </div>
    </div>
  )
}
function CartItem({ product }) {
  const { title, description, thumbnail, price, id, quantity } = product
  const { dispatch } = useCart()
  const handleRemoveItem = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  }
  const OnIncrement = () => {
    const updateProduct = { ...product, quantity: quantity + 1 }
    dispatch({ type: 'UPDATE_QUANTITY', payload: updateProduct })
  }
  const OnDecrement = () => {
    const updateProduct = { ...product, quantity: quantity - 1 }
    dispatch({ type: 'UPDATE_QUANTITY', payload: updateProduct })
  }
  return (
    <div className='cart-item' id={id}>
      <img src={thumbnail} alt={title} className='item-image' />
      <div className='item-details'>
        <h2 className='item-name'>{title}</h2>
        <p className='item-price'>${price}</p>
        <span className='cart-item-buttons'>
          <span onClick={OnDecrement}>
            <UnlessQuantity />
          </span>
          {quantity}

          <span onClick={OnIncrement}>
            <PlusQuantity />
          </span>
        </span>
        <span className='btn-delete' onClick={handleRemoveItem}>
          <DeleteIcon />
        </span>
      </div>
    </div>
  )
}

import { useCart } from '../../context/CartContext'
import { useTheme } from '../../context/ThemeContext'
import { Filter } from '../Filter/Filter'
import { DarkModeIcon, LightModeIcon, ShoppingCartIcon } from '../Icons/Icons'
import './Navbar.css'
export function Navbar() {
  const { toggleTheme, theme } = useTheme()
  const { dispatch } = useCart()
  const handleToggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' })
  }
  const quantity = 4
  return (
    <nav className='navbar'>
      <h1 className='logo'>Shopping Lufy</h1>
      <Filter />
      <div className='navbar-buttons'>
        <span onClick={toggleTheme} className='button'>
          {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </span>{' '}
        <span className='button' onClick={handleToggleCart}>
          <span className='quantity' hidden={quantity === 0}>
            {quantity}
          </span>
          <ShoppingCartIcon />
        </span>
      </div>
    </nav>
  )
}

import { createContext, useContext, useEffect, useReducer } from 'react'
import { cartReducer, InitialState } from '../Reducer/cartReducer'
const CartContext = createContext()
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, InitialState)
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state))
  }, [state])
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
export const useCart = () => useContext(CartContext)

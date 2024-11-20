export const InitialState = loadInitialState()
function loadInitialState() {
  const savedState = localStorage.getItem('cart')
  return (
    JSON.parse(savedState) || { cartItems: [], totalItems: 0, isOpen: false }
  )
}
export function cartReducer(state, dispatch) {
  switch (dispatch.type) {
    case 'ADD_TO_CART':
      const newItem = dispatch.payload
      console.log(newItem, 'item')
      console.log(state)
      const inCart = state.cartItems.find((item) => item.id === newItem.id)
      if (inCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalItems: state.totalItems + 1,
        }
      }
      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
        totalItems: state.totalItems + 1,
      }
    case 'REMOVE_FROM_CART':
      const itemToRemove = dispatch.payload
      console.log(itemToRemove, 'itrem')
      const exist = state.cartItems.find((item) => item.id === itemToRemove.id)
      if (exist.quantity === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== itemToRemove.id
          ),
          totalItems: state.totalItems - itemToRemove.quantity,
        }
      }

    case 'UPDATE_QUANTITY':
      const { id, quantity } = dispatch.payload
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        ),
        totalItems: state.cartItems.reduce(
          (sum, item) => sum + item.quantity,
          0
        ),
      }
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
        totalItems: 0,
      }
    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen,
      }
    default:
      return ''
  }
}

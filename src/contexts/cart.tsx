import { useNavigate } from 'react-router-dom'
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react'

import { storageConfig } from '../config/storage'
import { CartItem, Order, cartReducer } from '../reducers/cart/reducer'
import {
  addItemAction,
  checkoutAction,
  decrementItemAmountAction,
  incrementItemAmountAction,
  removeItemAction,
} from '../reducers/cart/actions'

interface CheckoutData {
  cep: string
  street: string
  number: number
  complement?: string | null
  neighborhood: string
  city: string
  state: string
  paymentMethod: string
}

interface CartContextProps {
  items: CartItem[]
  orders: Order[]
  addItemToCart: (item: CartItem) => void
  removeItemFromCart: (itemId: string) => void
  decrementItemAmount: (itemId: string) => void
  incrementItemAmount: (itemId: string) => void
  checkout: (data: CheckoutData) => void
}

export const CartContext = createContext({} as CartContextProps)

export function useCart() {
  return useContext(CartContext)
}

const { CART_KEY } = storageConfig

export function CartContextProvider({ children }: PropsWithChildren) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
      orders: [],
    },
    (initialState) => {
      const storedStateJSON = localStorage.getItem(CART_KEY)

      if (storedStateJSON) {
        return JSON.parse(storedStateJSON)
      }

      return initialState
    },
  )

  const { items, orders } = cartState

  const navigate = useNavigate()

  function addItemToCart(newItem: CartItem) {
    dispatch(addItemAction(newItem))
  }

  function removeItemFromCart(itemId: string) {
    dispatch(removeItemAction(itemId))
  }

  function decrementItemAmount(itemId: string) {
    dispatch(decrementItemAmountAction(itemId))
  }

  function incrementItemAmount(itemId: string) {
    dispatch(incrementItemAmountAction(itemId))
  }

  function checkout(data: CheckoutData) {
    const newOrder: Order = {
      id: crypto.randomUUID(),
      items,
      cep: data.cep,
      city: data.city,
      neighborhood: data.neighborhood,
      number: data.number,
      state: data.state,
      street: data.street,
      complement: data.complement,
      paymentMethod: data.paymentMethod,
      createdAt: new Date(),
    }

    dispatch(checkoutAction(newOrder))

    return navigate(`/order/${newOrder.id}/success`)
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem(CART_KEY, stateJSON)
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        items,
        orders,
        addItemToCart,
        removeItemFromCart,
        decrementItemAmount,
        incrementItemAmount,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

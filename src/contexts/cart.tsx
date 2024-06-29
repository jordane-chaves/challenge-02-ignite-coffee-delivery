import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import { storageConfig } from '../config/storage'

interface CartItem {
  coffeeId: string
  amount: number
}

interface CartContextProps {
  cartItems: CartItem[]
  addItemToCart: (item: CartItem) => void
  removeItemFromCart: (itemId: string) => void
  decrementItemAmount: (itemId: string) => void
  incrementItemAmount: (itemId: string) => void
}

export const CartContext = createContext({} as CartContextProps)

export function useCart() {
  return useContext(CartContext)
}

const { CART_KEY } = storageConfig

export function CartContextProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedStateAsJSON = localStorage.getItem(CART_KEY)

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return []
  })

  function addItemToCart(item: CartItem) {
    setCartItems((state) => {
      const itemIndex = state.findIndex(
        (cartItem) => cartItem.coffeeId === item.coffeeId,
      )

      const newState = [...state]

      if (itemIndex >= 0) {
        newState[itemIndex] = item
      } else {
        newState.push(item)
      }

      return newState
    })
  }

  function removeItemFromCart(itemId: string) {
    setCartItems((state) => state.filter((item) => item.coffeeId !== itemId))
  }

  function decrementItemAmount(itemId: string) {
    setCartItems((state) =>
      state.map((cartItem) => {
        if (cartItem.coffeeId === itemId) {
          return {
            ...cartItem,
            amount: cartItem.amount - 1,
          }
        } else {
          return cartItem
        }
      }),
    )
  }

  function incrementItemAmount(itemId: string) {
    setCartItems((state) =>
      state.map((cartItem) => {
        if (cartItem.coffeeId === itemId) {
          return {
            ...cartItem,
            amount: cartItem.amount + 1,
          }
        } else {
          return cartItem
        }
      }),
    )
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems)

    localStorage.setItem(CART_KEY, stateJSON)
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        decrementItemAmount,
        incrementItemAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

import { produce } from 'immer'

import { ActionTypes, ActionTypesProps } from './actions'

export interface CartItem {
  coffeeId: string
  amount: number
}

export interface Order {
  id: string
  items: CartItem[]
  createdAt: Date
  cep: string
  street: string
  number: number
  complement?: string | null
  neighborhood: string
  city: string
  state: string
  paymentMethod: string
}

interface CartState {
  items: CartItem[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: ActionTypesProps) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      const itemIndex = state.items.findIndex(
        (item) => item.coffeeId === action.payload.newItem.coffeeId,
      )

      return produce(state, (draft) => {
        if (itemIndex >= 0) {
          draft.items[itemIndex] = action.payload.newItem
        } else {
          draft.items.push(action.payload.newItem)
        }
      })
    }
    case ActionTypes.REMOVE_ITEM: {
      const itemIndex = state.items.findIndex(
        (item) => item.coffeeId === action.payload.itemId,
      )

      if (itemIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.items.splice(itemIndex, 1)
      })
    }
    case ActionTypes.DECREMENT_ITEM_AMOUNT: {
      const itemIndex = state.items.findIndex(
        (item) => item.coffeeId === action.payload.itemId,
      )

      if (itemIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.items[itemIndex].amount--
      })
    }
    case ActionTypes.INCREMENT_ITEM_AMOUNT: {
      const itemIndex = state.items.findIndex(
        (item) => item.coffeeId === action.payload.itemId,
      )

      if (itemIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.items[itemIndex].amount++
      })
    }
    case ActionTypes.CHECKOUT:
      return produce(state, (draft) => {
        draft.items = []
        draft.orders.push(action.payload.newOrder)
      })
    default:
      return state
  }
}

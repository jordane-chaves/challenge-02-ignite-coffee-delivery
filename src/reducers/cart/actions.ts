import { CartItem, Order } from './reducer'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  DECREMENT_ITEM_AMOUNT = 'DECREMENT_ITEM_AMOUNT',
  INCREMENT_ITEM_AMOUNT = 'INCREMENT_ITEM_AMOUNT',
  CHECKOUT = 'CHECKOUT',
}

export type ActionTypesProps =
  | {
      type: ActionTypes.ADD_ITEM
      payload: { newItem: CartItem }
    }
  | {
      type: ActionTypes.REMOVE_ITEM
      payload: { itemId: string }
    }
  | {
      type: ActionTypes.DECREMENT_ITEM_AMOUNT
      payload: { itemId: string }
    }
  | {
      type: ActionTypes.INCREMENT_ITEM_AMOUNT
      payload: { itemId: string }
    }
  | {
      type: ActionTypes.CHECKOUT
      payload: { newOrder: Order }
    }

export function addItemAction(newItem: CartItem): ActionTypesProps {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      newItem,
    },
  }
}

export function removeItemAction(itemId: string): ActionTypesProps {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  }
}

export function decrementItemAmountAction(itemId: string): ActionTypesProps {
  return {
    type: ActionTypes.DECREMENT_ITEM_AMOUNT,
    payload: {
      itemId,
    },
  }
}

export function incrementItemAmountAction(itemId: string): ActionTypesProps {
  return {
    type: ActionTypes.INCREMENT_ITEM_AMOUNT,
    payload: {
      itemId,
    },
  }
}

export function checkoutAction(newOrder: Order): ActionTypesProps {
  return {
    type: ActionTypes.CHECKOUT,
    payload: {
      newOrder,
    },
  }
}

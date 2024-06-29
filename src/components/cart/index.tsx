import { PiShoppingCartFill } from 'react-icons/pi'

import { useCart } from '../../contexts/cart'
import { CartAmount, CartContainer } from './styles'

export function Cart() {
  const { cartItems } = useCart()

  const cartItemsAmount = cartItems.length

  return (
    <CartContainer to="/checkout" title="Ir ao carrinho">
      <PiShoppingCartFill />
      <CartAmount>{cartItemsAmount}</CartAmount>
    </CartContainer>
  )
}

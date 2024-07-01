import { PiShoppingCartFill } from 'react-icons/pi'

import { useCart } from '../../contexts/cart'
import { CartAmount, CartContainer } from './styles'

export function Cart() {
  const { items } = useCart()

  const itemsAmount = items.length

  return (
    <CartContainer to="/checkout" title="Ir ao carrinho">
      <PiShoppingCartFill />
      <CartAmount>{itemsAmount}</CartAmount>
    </CartContainer>
  )
}

import { PiShoppingCartFill } from 'react-icons/pi'

import { CartAmount, CartContainer } from './styles'

export function Cart() {
  return (
    <CartContainer to="/checkout" title="Ir ao carrinho">
      <PiShoppingCartFill />
      <CartAmount>{3}</CartAmount>
    </CartContainer>
  )
}

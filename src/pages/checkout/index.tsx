import {
  PiBank,
  PiCreditCard,
  PiCurrencyDollar,
  PiMapPinLine,
  PiMoney,
} from 'react-icons/pi'

import { coffees } from '../../../data.json'
import { appConfig } from '../../config/app'
import { CoffeeCard } from '../../components/coffee-card'
import { PaymentSelect } from '../../components/payment-select'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { useCart } from '../../contexts/cart'
import { formatAsCurrency } from '../../utils/format-as-currency'
import {
  AddressesFields,
  CheckoutContainer,
  CoffeeList,
  FormContainer,
  PaymentSelectContainer,
  Section,
  SectionHeader,
  SelectedCoffeesContainer,
  SelectedCoffeesSection,
  Summary,
} from './styles'

export function Checkout() {
  const { cartItems } = useCart()

  const coffeesInCart = cartItems.map((item) => {
    const coffee = coffees.find((coffee) => coffee.id === item.coffeeId)

    if (!coffee) {
      throw new Error('Invalid coffee.')
    }

    return {
      ...coffee,
      amount: item.amount,
    }
  })

  const totalCoffeesInCartPrice = coffeesInCart.reduce((result, coffee) => {
    return result + coffee.amount * coffee.price
  }, 0)

  const totalPrice = totalCoffeesInCartPrice + appConfig.DELIVERY_PRICE

  const formattedTotalCoffeesInCart = formatAsCurrency(totalCoffeesInCartPrice)
  const formattedDelivery = formatAsCurrency(appConfig.DELIVERY_PRICE)
  const formattedTotal = formatAsCurrency(totalPrice)

  return (
    <CheckoutContainer className="container">
      <FormContainer>
        <h5>Complete seu pedido</h5>

        <form>
          <Section>
            <SectionHeader $iconColor="yellow-dark">
              <PiMapPinLine />

              <div>
                <p>Endereço de entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </SectionHeader>

            <AddressesFields>
              <Input type="text" name="cep" placeholder="CEP" required />

              <Input type="text" name="street" placeholder="Rua" required />

              <Input
                type="number"
                name="number"
                placeholder="Número"
                min={1}
                required
              />

              <Input type="text" name="complement" placeholder="Complemento" />

              <Input
                type="text"
                name="neighborhood"
                placeholder="Bairro"
                required
              />

              <Input type="text" name="city" placeholder="Cidade" required />

              <Input
                type="text"
                name="state"
                placeholder="UF"
                maxLength={2}
                required
              />
            </AddressesFields>
          </Section>

          <Section>
            <SectionHeader $iconColor="purple">
              <PiCurrencyDollar />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </SectionHeader>

            <PaymentSelectContainer>
              <PaymentSelect
                name="payment"
                icon={PiCreditCard}
                label="Cartão de Crédito"
              />

              <PaymentSelect
                name="payment"
                icon={PiBank}
                label="Cartão de Débito"
              />

              <PaymentSelect name="payment" icon={PiMoney} label="Dinheiro" />
            </PaymentSelectContainer>
          </Section>
        </form>
      </FormContainer>

      <SelectedCoffeesContainer>
        <h5>Cafés selecionados</h5>

        <SelectedCoffeesSection>
          <CoffeeList>
            {coffeesInCart.map((coffee) => (
              <li key={coffee.id}>
                <CoffeeCard
                  variant="cart"
                  coffee={coffee}
                  coffeeAmount={coffee.amount}
                />
              </li>
            ))}
          </CoffeeList>

          <Summary>
            <div>
              <span>Total de itens</span>
              <span>{formattedTotalCoffeesInCart}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>{formattedDelivery}</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>{formattedTotal}</strong>
            </div>
          </Summary>

          <Button>Confirmar Pedido</Button>
        </SelectedCoffeesSection>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  )
}

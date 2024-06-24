import {
  PiBank,
  PiCreditCard,
  PiCurrencyDollar,
  PiMapPinLine,
  PiMoney,
} from 'react-icons/pi'

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
import { Input } from '../../components/ui/input'
import { PaymentSelect } from '../../components/payment-select'
import { Button } from '../../components/ui/button'
import { CoffeeCard } from '../../components/coffee-card'

export function Checkout() {
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
            {Array.from({ length: 3 }).map((_, index) => (
              <li key={index}>
                <CoffeeCard variant="cart" />
              </li>
            ))}
          </CoffeeList>

          <Summary>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </Summary>

          <Button>Confirmar Pedido</Button>
        </SelectedCoffeesSection>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  )
}

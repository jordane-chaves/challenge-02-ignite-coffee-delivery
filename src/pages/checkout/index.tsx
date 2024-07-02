import { zodResolver } from '@hookform/resolvers/zod'
import { ElementType } from 'react'
import {
  PiBank,
  PiCreditCard,
  PiCurrencyDollar,
  PiMapPinLine,
  PiMoney,
} from 'react-icons/pi'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import coffeeImage from '../../assets/coffee.svg'
import { coffees } from '../../../data.json'
import { appConfig } from '../../config/app'
import { CoffeeCard } from '../../components/coffee-card'
import { PaymentSelect } from '../../components/payment-select'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { useCart } from '../../contexts/cart'
import { formatAsCurrency } from '../../utils/format-as-currency'
import { CepInput } from './components/cep-input'
import {
  AddressesFields,
  CheckoutContainer,
  CoffeeList,
  EmptyCartContainer,
  FormContainer,
  PaymentErrorMessage,
  PaymentMethodsContainer,
  PaymentSelectContainer,
  Section,
  SectionHeader,
  SelectedCoffeesContainer,
  SelectedCoffeesSection,
  Summary,
} from './styles'

type PaymentMethods = Record<
  string,
  {
    icon: ElementType
    label: string
  }
>

export const paymentMethods: PaymentMethods = {
  credit: { icon: PiCreditCard, label: 'Cartão de Crédito' },
  debit: { icon: PiBank, label: 'Cartão de Débito' },
  money: { icon: PiMoney, label: 'Dinheiro' },
}

const checkoutFormSchema = z.object({
  cep: z
    .string()
    .min(1, 'Preencha o CEP')
    .regex(/\d{5}-\d{3}/, 'Formato de CEP inválido.'),
  street: z.string().min(1, 'Preencha a Rua'),
  number: z
    .number({ message: 'Preencha o Número' })
    .min(1, 'Preencha o Número'),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, 'Preencha o Bairro'),
  city: z.string().min(1, 'Preencha a Cidade'),
  state: z
    .string()
    .min(1, 'Preencha a sigla do Estado')
    .length(2, 'Preencha a sigla do Estado')
    .regex(/[A-Z]{2}/, 'Formato inválido'),
  paymentMethod: z.enum(['credit', 'debit', 'money'], {
    message: 'Selecione o método de pagamento',
  }),
})

export type CheckoutFormSchema = z.infer<typeof checkoutFormSchema>

export function Checkout() {
  const { items, checkout } = useCart()

  const navigate = useNavigate()

  const checkoutForm = useForm<CheckoutFormSchema>({
    resolver: zodResolver(checkoutFormSchema),
  })

  const {
    formState: { errors, isValid: isValidForm },
    handleSubmit,
    register,
    reset,
  } = checkoutForm

  const isCartEmpty = items.length === 0

  function goToHome() {
    navigate('/')
  }

  function handleCheckout(data: CheckoutFormSchema) {
    if (isCartEmpty) {
      return alert('É necessário ter pelo menos 1 item no carrinho.')
    }

    checkout(data)
    reset()
  }

  if (isCartEmpty) {
    return (
      <CheckoutContainer className="container">
        <EmptyCartContainer>
          <img src={coffeeImage} />

          <div>
            <h2>Seu carrinho está vazio</h2>
            <p>Escolha um café fresquinho na página inicial.</p>
          </div>

          <Button onClick={goToHome}>Página inicial</Button>
        </EmptyCartContainer>
      </CheckoutContainer>
    )
  }

  const coffeesInCart = items.map((item) => {
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

  const isSubmitDisabled = (false && !isValidForm) || isCartEmpty

  return (
    <CheckoutContainer className="container">
      <FormContainer>
        <h5>Complete seu pedido</h5>

        <FormProvider {...checkoutForm}>
          <form id="checkout-form" onSubmit={handleSubmit(handleCheckout)}>
            <Section>
              <SectionHeader $iconColor="yellow-dark">
                <PiMapPinLine />

                <div>
                  <p>Endereço de entrega</p>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </SectionHeader>

              <AddressesFields>
                <CepInput />

                <Input
                  type="text"
                  placeholder="Rua"
                  required
                  errorMessage={errors.street?.message}
                  {...register('street')}
                />

                <Input
                  type="number"
                  placeholder="Número"
                  min={1}
                  required
                  errorMessage={errors.number?.message}
                  {...register('number', { valueAsNumber: true })}
                />

                <Input
                  type="text"
                  placeholder="Complemento"
                  errorMessage={errors.complement?.message}
                  {...register('complement')}
                />

                <Input
                  type="text"
                  placeholder="Bairro"
                  required
                  errorMessage={errors.neighborhood?.message}
                  {...register('neighborhood')}
                />

                <Input
                  type="text"
                  placeholder="Cidade"
                  required
                  errorMessage={errors.city?.message}
                  {...register('city')}
                />

                <Input
                  type="text"
                  placeholder="UF"
                  maxLength={2}
                  required
                  errorMessage={errors.state?.message}
                  {...register('state')}
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

              <PaymentMethodsContainer>
                <PaymentSelectContainer>
                  {Object.keys(paymentMethods).map((key) => {
                    const method = paymentMethods[key]

                    return (
                      <PaymentSelect
                        key={key}
                        icon={method.icon}
                        label={method.label}
                        {...register('paymentMethod')}
                        value={key}
                      />
                    )
                  })}
                </PaymentSelectContainer>

                {!!errors.paymentMethod && (
                  <PaymentErrorMessage>
                    {errors.paymentMethod?.message}
                  </PaymentErrorMessage>
                )}
              </PaymentMethodsContainer>
            </Section>
          </form>
        </FormProvider>
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

          <Button
            type="submit"
            form="checkout-form"
            disabled={isSubmitDisabled}
            title={isSubmitDisabled ? 'Preencha o formulário' : undefined}
          >
            Confirmar Pedido
          </Button>
        </SelectedCoffeesSection>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  )
}

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { PiShoppingCartSimpleFill, PiTrash } from 'react-icons/pi'
import { z } from 'zod'

import { Button } from '../ui/button'
import { Step } from '../ui/step'
import {
  CardContainer,
  CardFooter,
  CardForm,
  CardVariants,
  DetailsContainer,
  Price,
  TagsContainer,
} from './styles'
import { useCart } from '../../contexts/cart'

export interface Coffee {
  id: string
  name: string
  description: string
  imageUrl: string
  tags: string[]
  price: number
}

const addCoffeeToCartFormSchema = z.object({
  coffeeId: z.string(),
  amount: z.number().min(1),
})

export type AddCoffeeToCartFormSchema = z.infer<
  typeof addCoffeeToCartFormSchema
>

interface CoffeeCardProps {
  coffeeAmount?: number
  coffee: Coffee
  variant?: CardVariants
}

export function CoffeeCard({
  coffeeAmount = 1,
  coffee,
  variant = 'catalog',
}: CoffeeCardProps) {
  const {
    addItemToCart,
    removeItemFromCart,
    decrementItemAmount,
    incrementItemAmount,
  } = useCart()

  const addCoffeeToCartForm = useForm<AddCoffeeToCartFormSchema>({
    resolver: zodResolver(addCoffeeToCartFormSchema),
    defaultValues: {
      coffeeId: coffee.id,
      amount: coffeeAmount,
    },
  })

  const { handleSubmit, setValue, watch } = addCoffeeToCartForm

  const amount = watch('amount')

  const shouldUpdateCartItemAmount = variant === 'cart'

  function handleDecrement() {
    if (amount <= 1) {
      return
    }

    setValue('amount', amount - 1)

    if (shouldUpdateCartItemAmount) {
      decrementItemAmount(coffee.id)
    }
  }

  function handleIncrement() {
    if (amount >= 99) {
      return
    }

    setValue('amount', amount + 1)

    if (shouldUpdateCartItemAmount) {
      incrementItemAmount(coffee.id)
    }
  }

  function handleRemoveCoffee() {
    removeItemFromCart(coffee.id)
  }

  const showRemoveButton = variant === 'cart'
  const showAddToCartButton = variant === 'catalog'

  const formattedPrice = coffee.price.toFixed(2)

  return (
    <CardContainer $variant={variant}>
      <img src={coffee.imageUrl} alt={coffee.name} />

      <TagsContainer>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagsContainer>

      <DetailsContainer>
        <h4>{coffee.name}</h4>
        <p>{coffee.description}</p>

        <CardFooter>
          <Price>
            R$ <strong>{formattedPrice}</strong>
          </Price>

          <CardForm onSubmit={handleSubmit(addItemToCart)}>
            <Step
              value={amount}
              onDecrement={handleDecrement}
              onIncrement={handleIncrement}
            />

            {showRemoveButton && (
              <Button
                type="button"
                variant="secondary"
                onClick={handleRemoveCoffee}
              >
                <PiTrash />
                Remover
              </Button>
            )}

            {showAddToCartButton && (
              <Button
                type="submit"
                variant="icon"
                title="Adicionar ao carrinho"
              >
                <PiShoppingCartSimpleFill />
              </Button>
            )}
          </CardForm>
        </CardFooter>
      </DetailsContainer>
    </CardContainer>
  )
}

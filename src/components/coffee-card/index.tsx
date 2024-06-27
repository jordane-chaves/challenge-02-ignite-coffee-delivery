import { PiShoppingCartSimpleFill, PiTrash } from 'react-icons/pi'

import { Button } from '../ui/button'
import { Step } from '../ui/step'
import {
  CardActions,
  CardContainer,
  CardFooter,
  CardVariants,
  DetailsContainer,
  Price,
  TagsContainer,
} from './styles'

export interface Coffee {
  id: string
  name: string
  description: string
  imageUrl: string
  tags: string[]
  price: number
}

interface CoffeeCardProps {
  coffee: Coffee
  variant?: CardVariants
}

export function CoffeeCard({ coffee, variant = 'catalog' }: CoffeeCardProps) {
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

          <CardActions>
            <Step />

            {showRemoveButton && (
              <Button variant="secondary">
                <PiTrash />
                Remover
              </Button>
            )}

            {showAddToCartButton && (
              <Button variant="icon" title="Adicionar ao carrinho">
                <PiShoppingCartSimpleFill />
              </Button>
            )}
          </CardActions>
        </CardFooter>
      </DetailsContainer>
    </CardContainer>
  )
}

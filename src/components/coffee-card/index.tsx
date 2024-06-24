import { PiShoppingCartSimpleFill, PiTrash } from 'react-icons/pi'

import coffeeImage from '../../assets/coffees/Americano.png'
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

interface CoffeeCardProps {
  variant?: CardVariants
}

export function CoffeeCard({ variant = 'catalog' }: CoffeeCardProps) {
  const showRemoveButton = variant === 'cart'
  const showAddToCartButton = variant === 'catalog'

  return (
    <CardContainer $variant={variant}>
      <img src={coffeeImage} alt="" />

      <TagsContainer>
        <span>Tradicional</span>
      </TagsContainer>

      <DetailsContainer>
        <h4>Expresso Tradicional</h4>
        <p>O tradicional café feito com água quente e grãos moídos</p>

        <CardFooter>
          <Price>
            R$ <strong>9,90</strong>
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

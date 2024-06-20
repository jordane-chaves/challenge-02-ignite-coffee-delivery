import coffeeImage from '../../assets/coffees/Americano.png'
import {
  BuyContainer,
  BuyFormContainer,
  CardContainer,
  TagsContainer,
} from './styles'
import { Step } from '../step'
import { PiShoppingCartSimpleFill } from 'react-icons/pi'
import { Button } from '../button'

export function CoffeeCard() {
  return (
    <CardContainer>
      <img src={coffeeImage} alt="" />

      <TagsContainer>
        <span>Tradicional</span>
      </TagsContainer>

      <h4>Expresso Tradicional</h4>

      <p>O tradicional café feito com água quente e grãos moídos</p>

      <BuyContainer>
        <span>
          R$ <strong>9,90</strong>
        </span>

        <BuyFormContainer>
          <Step />

          <Button variant="icon" title="Adicionar ao carrinho">
            <PiShoppingCartSimpleFill />
          </Button>
        </BuyFormContainer>
      </BuyContainer>
    </CardContainer>
  )
}

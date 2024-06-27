import {
  PiCoffeeFill,
  PiPackageFill,
  PiShoppingCartFill,
  PiTimerFill,
} from 'react-icons/pi'

import heroImage from '../../assets/hero.png'
import { CoffeeCard } from '../../components/coffee-card'
import { coffees } from '../../coffees'
import {
  CoffeeList,
  Content,
  HeroContainer,
  HeroImageContainer,
  HeroItem,
  HeroItems,
  HeroTitle,
  HomeContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <div className="container">
          <div>
            <HeroTitle>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </HeroTitle>

            <HeroItems>
              <HeroItem $color="yellow-dark">
                <div className="icon">
                  <PiShoppingCartFill />
                </div>
                <span>Compra simples e segura</span>
              </HeroItem>

              <HeroItem $color="text">
                <div className="icon">
                  <PiPackageFill />
                </div>
                <span>Embalagem mantém o café intacto</span>
              </HeroItem>

              <HeroItem $color="yellow">
                <div className="icon">
                  <PiTimerFill />
                </div>
                <span>Entrega rápida e rastreada</span>
              </HeroItem>

              <HeroItem $color="purple">
                <div className="icon">
                  <PiCoffeeFill />
                </div>
                <span>O café chega fresquinho até você</span>
              </HeroItem>
            </HeroItems>
          </div>

          <HeroImageContainer>
            <img
              src={heroImage}
              alt="Ilustração de um copo de café com uma forma orgânica amarela por trás, contendo alguns grãos de café jogados e pó de café dentro de alguns pequenos recipientes."
            />
          </HeroImageContainer>
        </div>
      </HeroContainer>

      <Content className="container">
        <h2>Nossos cafés</h2>

        <CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeList>
      </Content>
    </HomeContainer>
  )
}

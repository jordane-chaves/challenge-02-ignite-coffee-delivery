import { PiCurrencyDollar, PiMapPinFill, PiTimerFill } from 'react-icons/pi'

import deliverymanImage from '../../assets/deliveryman.png'
import {
  InfoItem,
  OrderInfo,
  OrderInfoContainer,
  SuccessContainer,
} from './styles'

export function Success() {
  return (
    <SuccessContainer className="container">
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <OrderInfoContainer>
        <OrderInfo>
          <InfoItem $color="purple">
            <div className="icon">
              <PiMapPinFill />
            </div>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </InfoItem>

          <InfoItem $color="yellow">
            <div className="icon">
              <PiTimerFill />
            </div>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </InfoItem>

          <InfoItem $color="yellow-dark">
            <div className="icon">
              <PiCurrencyDollar />
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </div>
          </InfoItem>
        </OrderInfo>

        <img
          src={deliverymanImage}
          alt="Ilustração de um homem pilotando uma scooter com uma caixa atrás"
        />
      </OrderInfoContainer>
    </SuccessContainer>
  )
}

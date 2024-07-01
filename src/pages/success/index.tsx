import { useEffect, useState } from 'react'
import { PiCurrencyDollar, PiMapPinFill, PiTimerFill } from 'react-icons/pi'
import { useNavigate, useParams } from 'react-router-dom'

import deliverymanImage from '../../assets/deliveryman.png'
import { useCart } from '../../contexts/cart'
import { Order } from '../../reducers/cart/reducer'
import { paymentMethods } from '../checkout'
import {
  InfoItem,
  OrderInfo,
  OrderInfoContainer,
  SuccessContainer,
} from './styles'

type RouteParams = {
  orderId: string
}

export function Success() {
  const [order, setOrder] = useState<Order>()

  const { orders } = useCart()

  const navigate = useNavigate()
  const { orderId } = useParams<RouteParams>()

  useEffect(() => {
    const item = orders.find((item) => item.id === orderId)

    if (!item) {
      return navigate('/')
    }

    setOrder(item)
  }, [orderId, orders, navigate])

  if (!order) {
    return null
  }

  const firstAddress = `${order.street}, ${order.number}`
  const secondAddress = `${order.neighborhood} - ${order.city}, ${order.state}`
  const paymentMethod = paymentMethods[order.paymentMethod].label

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
                Entrega em <strong>{firstAddress}</strong>
              </p>
              <p>{secondAddress}</p>
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
              <strong>{paymentMethod}</strong>
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

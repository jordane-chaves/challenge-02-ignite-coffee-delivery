import { PiMapPinFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { Cart } from '../cart'
import { HeaderActions, HeaderContainer, Location } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <Link to="/">
          <img src={coffeeDeliveryLogo} alt="" />
        </Link>

        <HeaderActions>
          <Location>
            <PiMapPinFill />
            <span>Porto Alegre, RS</span>
          </Location>
          <Cart />
        </HeaderActions>
      </div>
    </HeaderContainer>
  )
}

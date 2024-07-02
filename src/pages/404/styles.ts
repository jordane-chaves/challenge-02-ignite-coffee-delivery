import styled from 'styled-components'

import spillCoffeeImage from '../../assets/spill-coffee.png'

export const NotFoundContainer = styled.div`
  background: url(${spillCoffeeImage}) no-repeat -30rem 10rem / cover;

  height: calc(100dvh - 112px);

  @media (min-width: ${(props) => props.theme.screens.sm}) {
    background-position-x: right;
  }
`

export const TextContainer = styled.div`
  padding-top: 5rem;

  p {
    margin-top: 0.5rem;
  }

  button {
    margin-top: 2rem;
  }
`

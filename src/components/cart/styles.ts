import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CartContainer = styled(Link)`
  background-color: ${(props) => props.theme.colors['yellow-light']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  position: relative;

  svg {
    fill: ${(props) => props.theme.colors['yellow-dark']};
    height: 1.375rem;
    width: 1.375rem;
  }
`

export const CartAmount = styled.span`
  background-color: ${(props) => props.theme.colors['yellow-dark']};
  border-radius: 50%;

  color: ${(props) => props.theme.colors.white};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 1.25rem;
  width: 1.25rem;

  position: absolute;
  top: -25%;
  right: -25%;
`

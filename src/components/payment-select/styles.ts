import styled from 'styled-components'

export const PaymentSelectContainer = styled.div`
  background-color: ${(props) => props.theme.colors.button};
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;
  cursor: pointer;

  position: relative;

  svg {
    color: ${(props) => props.theme.colors.purple};
    height: 1rem;
    width: 1rem;
  }

  span {
    color: ${(props) => props.theme.colors.text};
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;

    min-width: max-content;
  }

  input {
    all: unset;

    position: absolute;
    inset: 0;

    z-index: 3;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
    color: ${(props) => props.theme.colors.subtitle};
  }

  &:has(input:focus) {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['purple-dark']};
  }

  &:has(input:checked) {
    background-color: ${(props) => props.theme.colors['purple-light']};
    outline: 1px solid ${(props) => props.theme.colors.purple};
  }
`

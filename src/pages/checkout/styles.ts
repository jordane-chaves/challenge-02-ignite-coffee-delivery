import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 2rem;

  padding-bottom: 4rem;

  h5 {
    margin-bottom: 1rem;
  }

  @media (max-width: ${(props) => props.theme.screens.md}) {
    flex-direction: column-reverse;
  }
`

const SectionBase = styled.section`
  background-color: ${(props) => props.theme.colors.card};

  display: flex;
  flex-direction: column;

  padding: 2.5rem;

  @media (max-width: ${(props) => props.theme.screens.lg}) {
    padding: 2rem;
  }

  @media (max-width: ${(props) => props.theme.screens.md}) {
    padding: 1.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const Section = styled(SectionBase)`
  border-radius: 6px;
  gap: 2rem;
`

interface SectionHeaderProps {
  $iconColor: 'purple' | 'yellow-dark'
}

export const SectionHeader = styled.header<SectionHeaderProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.colors[props.$iconColor]};
    height: 1.375rem;
    width: 1.375rem;
  }

  p {
    color: ${(props) => props.theme.colors.subtitle};
  }

  span {
    color: ${(props) => props.theme.colors.text};
    font-size: 0.875rem;
  }
`

export const AddressesFields = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  gap: 1rem 0.75rem;

  div:has(input[name='cep']) {
    grid-column-start: 1;
    grid-column-end: 2;
  }

  div:has(input[name='street']) {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  div:has(input[name='number']) {
    grid-column-start: 1;
    grid-column-end: 2;
  }

  div:has(input[name='complement']) {
    grid-column-start: 2;
    grid-column-end: 4;
  }

  div:has(input[name='city']) {
    min-width: 7rem;
  }

  @media (max-width: ${(props) => props.theme.screens.md}) {
    grid-template-columns: 1fr;

    div {
      grid-column: unset !important;
    }
  }
`

export const PaymentMethodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const PaymentSelectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(178px, 1fr));
  gap: 0.75rem;

  @media (max-width: ${(props) => props.theme.screens.md}) {
    grid-template-columns: 1fr;
  }
`

export const PaymentErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.error};

  font-size: 0.75rem;
  padding-left: 4px;
`

export const SelectedCoffeesContainer = styled.div`
  max-width: 28rem;
  width: 100%;
`

export const SelectedCoffeesSection = styled(SectionBase)`
  border-radius: 6px 44px 6px 44px;
  gap: 1.5rem;
`

export const CoffeeList = styled.ul`
  list-style: none;

  li {
    border-bottom: 1px solid ${(props) => props.theme.colors.button};
    padding-bottom: 1.5rem;
  }

  li + li {
    padding-top: 1.5rem;
  }
`

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;
  }

  span {
    font-size: 0.875rem;
    line-height: 130%;
  }

  strong {
    color: ${(props) => props.theme.colors.subtitle};
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const EmptyCartContainer = styled(Section)`
  border-radius: 6px 44px 6px 44px;
  text-align: center;

  margin-top: 8rem;
  padding: 3rem;
  width: 100%;

  position: relative;

  img {
    max-width: 12rem;

    position: absolute;
    top: -6.5rem;
    left: 50%;
    transform: translateX(-50%);
  }

  h2 {
    margin-top: 2rem;
  }

  p {
    margin-top: 0.5rem;
  }

  button {
    align-self: center;
    max-width: 10rem;
    width: 100%;
  }
`

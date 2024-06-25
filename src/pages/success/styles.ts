import styled, { css } from 'styled-components'

export const SuccessContainer = styled.main`
  padding-bottom: 4rem;

  > h2 {
    color: ${(props) => props.theme.colors['yellow-dark']};

    margin-top: 5rem;
  }

  > p {
    color: ${(props) => props.theme.colors.subtitle};
    font-size: 1.25rem;

    margin-top: 0.25rem;
  }

  @media (max-width: ${(props) => props.theme.screens.md}) {
    > h2 {
      margin-top: 2rem;
    }
  }
`

export const OrderInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  margin-top: 2.5rem;

  img {
    object-fit: contain;
    height: auto;
    max-width: 30.75rem;
    min-width: 12rem;
  }

  @media (max-width: ${(props) => props.theme.screens.md}) {
    flex-direction: column-reverse;
    margin-top: 3rem;

    img {
      max-width: 70vw;
    }
  }
`

export const OrderInfo = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  max-width: 32.875rem;
  min-width: min(20rem, 100%);
  width: 100%;

  padding: 2.5rem;

  position: relative;

  &::before {
    content: '';

    border-radius: inherit;
    background: ${(props) =>
      css`
        linear-gradient(
          -0.63turn,
          ${props.theme.colors.yellow},
          ${props.theme.colors.purple}
        )
      `};

    margin: -1px;
    position: absolute;
    inset: 0;
    z-index: -1;
  }

  @media (max-width: ${(props) => props.theme.screens.md}) {
    max-width: 100%;
  }
`

interface InfoItemProps {
  $color: 'purple' | 'yellow' | 'yellow-dark'
}

export const InfoItem = styled.div<InfoItemProps>`
  color: ${(props) => props.theme.colors.text};
  font-size: 1rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  .icon {
    background-color: ${(props) => props.theme.colors[props.$color]};
    border-radius: 50%;
    color: ${(props) => props.theme.colors.background};

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    width: fit-content;

    svg {
      height: 1rem;
      width: 1rem;
    }
  }
`

import styled, { css } from 'styled-components'

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  margin-top: 0.75rem;

  span {
    background-color: ${(props) => props.theme.colors['yellow-light']};
    border-radius: 9999px;

    color: ${(props) => props.theme.colors['yellow-dark']};
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;

    padding: 0.25rem 0.5rem;
  }
`

export const DetailsContainer = styled.div`
  h4 {
    margin-top: 1rem;
  }

  p {
    color: ${(props) => props.theme.colors.label};
    font-size: 0.875rem;
    line-height: 130%;

    margin-top: 0.5rem;
  }
`

export const Price = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: 0.875rem;
  line-height: 130%;
  min-width: fit-content;

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 130%;
  }
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 2rem;
`

export const CardForm = styled.form`
  display: flex;
  align-content: stretch;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const cardVariants = {
  catalog: css`
    border-radius: 6px 36px 6px 36px;
    text-align: center;
    padding: 0 1.25rem 1.25rem;

    > img {
      height: 7.5rem;
      width: 7.5rem;
      margin-top: -1.25rem;
    }
  `,
  cart: css`
    display: flex;
    align-items: center;
    gap: 1.25rem;

    padding: 0.5rem 0.25rem;

    position: relative;

    > img {
      height: 4rem;
      width: 4rem;
    }

    ${TagsContainer} {
      display: none;
    }

    ${DetailsContainer} {
      h4 {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 130%;

        margin: 0;
      }

      p {
        display: none;
      }
    }

    ${Price} {
      position: absolute;
      top: 8px;
      right: 4px;

      &,
      strong {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 700;
      }
    }

    ${CardFooter} {
      margin-top: 0.5rem;
    }
  `,
}

export type CardVariants = keyof typeof cardVariants

interface CardContainerProps {
  $variant: CardVariants
}

export const CardContainer = styled.div<CardContainerProps>`
  background-color: ${(props) => props.theme.colors.card};

  ${(props) => cardVariants[props.$variant]}
`

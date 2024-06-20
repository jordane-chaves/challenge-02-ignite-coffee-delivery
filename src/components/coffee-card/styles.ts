import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.colors.card};
  border-radius: 6px 36px 6px 36px;

  text-align: center;
  padding: 0 1.25rem 1.25rem;

  > img {
    height: 7.5rem;
    width: 7.5rem;
    margin-top: -1.25rem;
  }

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

export const BuyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 2rem;

  > span {
    color: ${(props) => props.theme.colors.text};
    font-size: 0.875rem;
    line-height: 130%;

    strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 130%;
    }
  }
`

export const BuyFormContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
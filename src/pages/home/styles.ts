import styled from 'styled-components'

import heroBackground from '../../assets/hero-background.png'

export const HomeContainer = styled.div``

export const HeroContainer = styled.section`
  background: url(${heroBackground}) no-repeat center/cover;

  .container {
    display: flex;
    gap: 3.5rem;

    padding-block: 5.75rem;
  }

  @media (max-width: ${(props) => props.theme.screens.md}) {
    .container {
      display: block;
      padding-block: 2rem;
    }
  }
`

export const HeroTitle = styled.div`
  color: ${(props) => props.theme.colors.subtitle};
  font-size: 1.25rem;
  line-height: 130%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 36.75rem;

  @media (max-width: ${(props) => props.theme.screens.md}) {
    text-align: center;

    p {
      font-size: 1rem;
    }
  }
`

export const HeroImageContainer = styled.div`
  flex: 1;
  position: relative;

  img {
    position: absolute;
    right: 0;
    z-index: -1;
  }

  @media (max-width: ${(props) => props.theme.screens.lg}) {
    img {
      display: none;
    }
  }
`

export const HeroItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  gap: 1.25rem 2.5rem;

  margin-top: 4.125rem;

  @media (max-width: ${(props) => props.theme.screens.sm}) {
    grid-template-columns: min-content;
    justify-content: center;

    margin-top: 2.5rem;
  }
`

interface HeroItemProps {
  $color: 'text' | 'purple' | 'yellow' | 'yellow-dark'
}

export const HeroItem = styled.div<HeroItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .icon {
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors[props.$color]};
    display: flex;

    padding: 0.5rem;

    svg {
      color: ${(props) => props.theme.colors.background};
      height: 1rem;
      width: 1rem;
    }
  }

  span {
    min-width: max-content;
  }
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  padding-block: 2rem 10rem;
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 2.5rem 2rem;
`

import styled from 'styled-components'

export const StepContainer = styled.div`
  background-color: ${(props) => props.theme.colors.button};
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  height: 100%;

  padding: 0.5rem;

  button {
    border: 0;
    background: none;
    color: ${(props) => props.theme.colors.purple};

    display: flex;

    cursor: pointer;
    transition: color 200ms;

    svg {
      height: 0.875rem;
      width: 0.875rem;
    }

    &:hover {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
  }

  span {
    color: ${(props) => props.theme.colors.title};
    text-align: center;
    line-height: 1;

    display: inline-block;
    width: 1.25rem;
  }
`

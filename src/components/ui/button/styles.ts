import styled, { css } from 'styled-components'

const buttonVariants = {
  primary: css`
    background-color: ${(props) => props.theme.colors['yellow']};

    font-size: 0.875rem;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;

    padding: 0.75rem 0.5rem;

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme.colors['yellow-dark']};
    }
  `,

  secondary: css`
    background-color: ${(props) => props.theme.colors.button};

    color: ${(props) => props.theme.colors.text};
    font-size: 0.75rem;
    line-height: 1;
    text-transform: uppercase;

    padding: 0.5rem 0.5rem;

    svg {
      color: ${(props) => props.theme.colors.purple};
      height: 1rem;
      width: 1rem;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme.colors.hover};
      color: ${(props) => props.theme.colors.subtitle};

      svg {
        color: ${(props) => props.theme.colors['purple-dark']};
      }
    }
  `,

  icon: css`
    background-color: ${(props) => props.theme.colors['purple-dark']};

    padding: 0.5rem;

    svg {
      height: 22px;
      width: 22px;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme.colors.purple};
    }
  `,
}

export type ButtonVariants = keyof typeof buttonVariants

interface ButtonContainerProps {
  $variant: ButtonVariants
}

const ButtonBase = styled.button`
  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  cursor: pointer;
  transition: background 200ms;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`

export const ButtonContainer = styled(ButtonBase)<ButtonContainerProps>`
  ${(props) => buttonVariants[props.$variant]}
`

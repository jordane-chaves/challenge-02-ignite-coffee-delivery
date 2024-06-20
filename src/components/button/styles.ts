import styled, { css } from 'styled-components'

const buttonVariants = {
  icon: css`
    background-color: ${(props) => props.theme.colors['purple-dark']};

    padding: 0.5rem;

    svg {
      height: 22px;
      width: 22px;
    }

    &:hover {
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
  gap: 0.25rem;

  cursor: pointer;
  transition: background 200ms;
`

export const ButtonContainer = styled(ButtonBase)<ButtonContainerProps>`
  ${(props) => buttonVariants[props.$variant]}
`

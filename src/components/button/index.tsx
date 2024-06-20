import { ButtonHTMLAttributes } from 'react'

import { ButtonContainer, ButtonVariants } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants
}

export function Button({ variant, ...props }: ButtonProps) {
  return <ButtonContainer $variant={variant} {...props} />
}
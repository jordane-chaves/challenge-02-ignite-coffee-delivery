import { ComponentProps, ElementType } from 'react'

import { PaymentSelectContainer } from './styles'

interface PaymentSelectProps extends ComponentProps<'input'> {
  icon: ElementType
  label: string
}

export function PaymentSelect({
  icon: Icon,
  label,
  ...props
}: PaymentSelectProps) {
  return (
    <PaymentSelectContainer title="Clique para selecionar">
      <Icon />
      <span>{label}</span>
      <input type="radio" {...props} />
    </PaymentSelectContainer>
  )
}

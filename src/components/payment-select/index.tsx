import { ComponentProps, ElementType, LegacyRef, forwardRef } from 'react'

import { PaymentSelectContainer } from './styles'

interface PaymentSelectProps extends ComponentProps<'input'> {
  icon: ElementType
  label: string
}

function BasePaymentSelect(
  { icon: Icon, label, ...props }: PaymentSelectProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <PaymentSelectContainer title="Clique para selecionar">
      <Icon />
      <span>{label}</span>
      <input ref={ref} type="radio" {...props} />
    </PaymentSelectContainer>
  )
}

export const PaymentSelect = forwardRef<HTMLInputElement, PaymentSelectProps>(
  BasePaymentSelect,
)

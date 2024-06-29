import { PiMinusBold, PiPlusBold } from 'react-icons/pi'

import { StepContainer } from './styles'

interface StepProps {
  value: number
  onDecrement: () => void
  onIncrement: () => void
}

export function Step({ value, onDecrement, onIncrement }: StepProps) {
  return (
    <StepContainer>
      <button type="button" title="Reduzir" onClick={onDecrement}>
        <PiMinusBold />
      </button>

      <input type="number" min={1} max={99} value={value} readOnly />

      <button type="button" title="Acrescentar" onClick={onIncrement}>
        <PiPlusBold />
      </button>
    </StepContainer>
  )
}

import { PiMinusBold, PiPlusBold } from 'react-icons/pi'

import { StepContainer } from './styles'

export function Step() {
  return (
    <StepContainer>
      <button title="Reduzir">
        <PiMinusBold />
      </button>

      <span>1</span>

      <button title="Acrescentar">
        <PiPlusBold />
      </button>
    </StepContainer>
  )
}

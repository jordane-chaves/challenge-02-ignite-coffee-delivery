import { ComponentProps, LegacyRef, forwardRef } from 'react'

import { BaseInputContainer, InputContainer, ErrorMessage } from './styles'

interface InputProps extends ComponentProps<'input'> {
  errorMessage?: string
}

function InputBase(
  { errorMessage, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <InputContainer>
      <BaseInputContainer>
        <input ref={ref} {...props} />
      </BaseInputContainer>

      {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputBase)

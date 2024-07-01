import { useImperativeHandle } from 'react'
import { useFormContext } from 'react-hook-form'
import { useIMask } from 'react-imask'

import { Input } from '../../../components/ui/input'
import { CheckoutFormSchema } from '..'

export function CepInput() {
  const {
    formState: { errors },
    register,
  } = useFormContext<CheckoutFormSchema>()

  const { ref: cepMaskRef } = useIMask<HTMLInputElement>({
    mask: '00000-000',
  })

  const { ref, ...cepRegisterProps } = register('cep')

  useImperativeHandle(ref, () => cepMaskRef.current)

  return (
    <Input
      type="text"
      placeholder="CEP"
      required
      errorMessage={errors.cep?.message}
      ref={cepMaskRef}
      {...cepRegisterProps}
    />
  )
}

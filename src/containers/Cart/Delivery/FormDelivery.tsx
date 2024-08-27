import React, { useState } from 'react'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'

import * as S from '../styles'
import Button from '../../../components/Button'

interface FormFieldsValuesProps {
  receiver: string
  description: string
  city: string
  number: number
  zipCode: string
  complement: string
}

type FormDeliveryProps = {
  handleClick: (data: FormFieldsValuesProps) => void
}

const FormDelivery = ({ handleClick }: FormDeliveryProps) => {
  const [data, setData] = useState<FormFieldsValuesProps>({
    receiver: '',
    description: '',
    city: '',
    number: 0,
    zipCode: '',
    complement: ''
  })

  const form = useFormik({
    initialValues: data,
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      //   zipCode: Yup.string()
      //     .min(8, 'O nome precisa ter pelo menos 8 caracteres')
      //     .max(8, 'O campo precisa ter pelo menos 8 caracteres')
      //     .required('O campo é obrigatório'),
      number: Yup.number().required('O campo é obrigatório')
    }),
    onSubmit: (values: FormFieldsValuesProps) => {
      setData(values)
      handleClick(values)
    }
  })

  function checkInputHasError(fiedlName: string) {
    const isTouched = fiedlName in form.touched
    const isInvalid = fiedlName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <S.FormContainer>
      <S.InputGroup>
        <label htmlFor="receiver">Quem irá receber</label>
        <input
          type="text"
          id="receiver"
          name="receiver"
          value={form.values.receiver}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkInputHasError('receiver') ? 'error' : ''}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label htmlFor="description">Endereço</label>
        <input
          type="text"
          id="description"
          name="description"
          value={form.values.description}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkInputHasError('description') ? 'error' : ''}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label htmlFor="city">Cidade</label>
        <input
          type="text"
          id="city"
          name="city"
          value={form.values.city}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkInputHasError('city') ? 'error' : ''}
        />
      </S.InputGroup>

      <S.InputContainer>
        <S.InputGroup>
          <label htmlFor="zipCode">CEP</label>
          <InputMask
            type="text"
            id="zipCode"
            name="zipCode"
            value={form.values.zipCode}
            onChange={form.handleChange}
            mask="99999-999"
            onBlur={form.handleBlur}
            className={checkInputHasError('zipCode') ? 'error' : ''}
          />
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="number">Número</label>
          <input
            type="number"
            id="number"
            name="number"
            value={form.values.number}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('number') ? 'error' : ''}
          />
        </S.InputGroup>
      </S.InputContainer>

      <S.InputGroup>
        <label htmlFor="complement">Complemento (opcional)</label>
        <input
          type="text"
          id="complement"
          name="complement"
          value={form.values.complement}
          onChange={form.handleChange}
        />
      </S.InputGroup>

      <Button
        placeholder="Continuar com o pagamento"
        displayMode="fullWidth"
        themeMode="second"
        kind="button"
        onClick={() => form.handleSubmit()}
      />
    </S.FormContainer>
  )
}

export default React.memo(FormDelivery)

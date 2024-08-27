import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'

import Button from '../../../components/Button'

import * as S from '../styles'

interface FormPaymentValuesProps {
  name: string
  cardNumber: string
  code: string
  month: string
  year: string
}

type FormPaymentProps = {
  handleClick: (data: FormPaymentValuesProps) => void
}

const FormPayment = ({ handleClick }: FormPaymentProps) => {
  const form = useFormik({
    initialValues: {
      name: '',
      cardNumber: '',
      code: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O número do cartão deve ter 16 dígitos')
        .required('O campo é obrigatório'),
      code: Yup.string()
        .min(3, 'O CVV deve ter 3 dígitos')
        .required('O campo é obrigatório'),
      month: Yup.string()
        .min(2, 'Mês inválido')
        .required('O campo é obrigatório'),
      year: Yup.string()
        .min(2, 'Ano inválido')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values: FormPaymentValuesProps) => {
      handleClick(values) // Envia os valores do formulário ao componente pai
    }
  })

  function checkInputHasError(fieldName: string) {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <S.FormContainer onSubmit={form.handleSubmit}>
      <S.InputGroup>
        <label htmlFor="name">Nome no cartão</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.values.name}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkInputHasError('name') ? 'error' : ''}
        />
      </S.InputGroup>

      <S.InputContainer>
        <S.InputGroup>
          <label htmlFor="cardNumber">Número do cartão</label>
          <InputMask
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={form.values.cardNumber}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            mask="9999 9999 9999 9999"
            className={checkInputHasError('cardNumber') ? 'error' : ''}
          />
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="code">CVV</label>
          <InputMask
            type="text"
            id="code"
            name="code"
            value={form.values.code}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            mask="999"
            className={checkInputHasError('code') ? 'error' : ''}
          />
        </S.InputGroup>
      </S.InputContainer>

      <S.InputContainer>
        <S.InputGroup>
          <label htmlFor="month">Mês de vencimento</label>
          <InputMask
            type="text"
            id="month"
            name="month"
            value={form.values.month}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            mask="99"
            className={checkInputHasError('month') ? 'error' : ''}
          />
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="year">Ano de vencimento</label>
          <InputMask
            type="text"
            id="year"
            name="year"
            value={form.values.year}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            mask="99"
            className={checkInputHasError('year') ? 'error' : ''}
          />
        </S.InputGroup>
      </S.InputContainer>

      <Button
        placeholder="Finalizar pagamento"
        displayMode="fullWidth"
        themeMode="primary"
        kind="button"
        type="submit"
        onClick={() => form.handleSubmit()}
      />
    </S.FormContainer>
  )
}

export default FormPayment

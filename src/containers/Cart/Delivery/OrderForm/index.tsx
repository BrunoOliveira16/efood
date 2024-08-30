import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'

import Button from '../../../../components/Button'

import * as S from '../../styles'

type OrderFormProps = {
  showNextForm: boolean
  handleClick: (item: DeliveryDataProps) => void
}

function OrderForm({ showNextForm, handleClick }: OrderFormProps) {
  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: 0,
      complement: '',
      name: '',
      cardNumber: '',
      code: '',
      month: '',
      year: ''
    },

    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string().required('O campo é obrigatório'),
      number: Yup.number().required('O campo é obrigatório'),
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

    onSubmit: (values) => {
      handleClick({
        receiver: values.receiver,
        address: {
          description: values.description,
          city: values.city,
          zipCode: values.zipCode,
          number: values.number,
          complement: values.complement
        },
        payment: {
          name: values.name,
          cardNumber: values.cardNumber,
          code: values.code,
          expires: {
            month: values.month,
            year: values.year
          }
        }
      })
    }
  })

  function checkInputHasError(fiedlName: string) {
    const isTouched = fiedlName in form.touched
    const isInvalid = fiedlName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  function renderDeliveryForm() {
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
      </S.FormContainer>
    )
  }

  function renderPaymentForm() {
    return (
      <S.FormContainer>
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
      </S.FormContainer>
    )
  }

  return (
    <form onSubmit={form.handleSubmit}>
      {!showNextForm ? renderDeliveryForm() : renderPaymentForm()}

      {showNextForm && (
        <Button
          placeholder="Finalizar pagamento"
          displayMode="fullWidth"
          themeMode="second"
          kind="button"
          type="submit"
          onClick={() => form.handleSubmit()}
        />
      )}
    </form>
  )
}

export default OrderForm

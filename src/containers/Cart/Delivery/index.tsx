import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../../store'
import { close, clear } from '../../../store/reducers/cart'
import { usePurchaseMutation } from '../../../services/api'
import { formatPrice, getTotalPrice } from '../../../utils/index'

import Button from '../../../components/Button'
import * as S from '../styles'

type DeliveryProps = {
  handleClick: () => void
}

const Delivery = ({ handleClick }: DeliveryProps) => {
  const [finalizePayment, setFinalizePayment] = useState(false)

  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const TotalPrice = getTotalPrice(items)

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      number: 0,
      zipCode: '',
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
      zipCode: Yup.string()
        .min(8, 'O nome precisa ter pelo menos 8 caracteres')
        .max(8, 'O campo precisa ter pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.number().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: values.number,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.name,
            number: values.cardNumber,
            code: values.code,
            expires: {
              month: values.month,
              year: values.year
            }
          }
        }
      })
    }
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  function closeCart() {
    dispatch(close())
    setFinalizePayment(false)
  }

  function checkInputHasError(fiedlName: string) {
    const isTouched = fiedlName in form.touched
    const isInvalid = fiedlName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  function renderFormSubTitle() {
    if (finalizePayment) {
      return (
        <S.SubTitle>
          Pagamento - Valor a pagar ${formatPrice(TotalPrice)}
        </S.SubTitle>
      )
    }

    return <S.SubTitle>Entrega</S.SubTitle>
  }

  function renderFormDelivery() {
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

  function renderFormPayment() {
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
              mask="9999 9999 9999 9999"
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
              mask="999"
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
              mask="99"
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
              mask="99"
            />
          </S.InputGroup>
        </S.InputContainer>
      </S.FormContainer>
    )
  }

  function renderBackButtons() {
    if (finalizePayment) {
      return (
        <Button
          placeholder="Voltar para a edição de endereço"
          displayMode="fullWidth"
          themeMode="second"
          kind="button"
          onClick={() => setFinalizePayment(false)}
        />
      )
    }

    return (
      <Button
        placeholder="Voltar para o carrinho"
        displayMode="fullWidth"
        themeMode="second"
        kind="button"
        onClick={handleClick}
      />
    )
  }

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <S.Sidebar>
      {isSuccess && data ? (
        <>
          <S.SubTitle>Pedido realizado - {data.orderId}</S.SubTitle>
          <S.TextContainer>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </S.TextContainer>
          <Button
            placeholder="Concluir"
            displayMode="fullWidth"
            themeMode="second"
            kind="button"
            onClick={closeCart}
          />
        </>
      ) : (
        <>
          {renderFormSubTitle()}

          <form onSubmit={form.handleSubmit}>
            {!finalizePayment ? renderFormDelivery() : renderFormPayment()}

            <S.ContainerButton>
              {finalizePayment && (
                <Button
                  placeholder={
                    isLoading
                      ? 'Finalizando pagamento...'
                      : 'Finalizar pagamento'
                  }
                  displayMode="fullWidth"
                  themeMode="second"
                  kind="button"
                  type="submit"
                  disabled={isLoading}
                />
              )}
            </S.ContainerButton>
          </form>

          {!finalizePayment && (
            <Button
              placeholder="Continuar com o pagamento"
              displayMode="fullWidth"
              themeMode="second"
              kind="button"
              onClick={() => setFinalizePayment(true)}
            />
          )}

          {renderBackButtons()}
        </>
      )}
    </S.Sidebar>
  )
}

export default Delivery

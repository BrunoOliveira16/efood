import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'

import { close, clear } from '../../../store/reducers/cart'

import Button from '../../../components/Button'

import * as S from '../styles'
import { usePurchaseMutation } from '../../../services/api'

type PaymentProps = {
  deliveryInfo: DeliveryDataProps
  productItems: MenuDataProps[]
  handleClick: () => void
}

const Payment = ({ deliveryInfo, productItems, handleClick }: PaymentProps) => {
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false)
  const [paymentInfo, setPaymentInfo] = useState<PaymentDataProps>({
    name: '',
    number: '',
    code: 0,
    expires: {
      month: 0,
      year: 0
    }
  })

  const [purchase] = usePurchaseMutation()
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: { ...paymentInfo },
    onSubmit: (values) => {
      setPaymentInfo(values)

      const purchasePayload = {
        delivery: deliveryInfo,
        payment: {
          card: paymentInfo
        },
        products: productItems.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      }
      purchase(purchasePayload)
    }
  })

  function closeCart() {
    dispatch(close())
    setIsPaymentCompleted(false)
  }

  function finishPayment() {
    setIsPaymentCompleted(true)
    dispatch(clear())
  }

  return (
    <S.Sidebar>
      {!isPaymentCompleted ? (
        <>
          <S.SubTitle>Pagamento - Valor a pagar R$ 190,90</S.SubTitle>
          <form onSubmit={form.handleSubmit}>
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
                  <label htmlFor="number">Número do cartão</label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="code">CVV</label>
                  <input
                    type="text"
                    id="code"
                    name="code"
                    value={form.values.code}
                    onChange={form.handleChange}
                  />
                </S.InputGroup>
              </S.InputContainer>
              <S.InputContainer>
                <S.InputGroup>
                  <label htmlFor="month">Mês de vencimento</label>
                  <input
                    type="text"
                    id="month"
                    name="month"
                    value={form.values.expires.month}
                    onChange={form.handleChange}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="year">Ano de vencimento</label>
                  <input
                    type="text"
                    id="year"
                    name="year"
                    value={form.values.expires.year}
                    onChange={form.handleChange}
                  />
                </S.InputGroup>
              </S.InputContainer>
              <Button
                placeholder="Finalizar pagamento"
                displayMode="fullWidth"
                themeMode="second"
                kind="button"
                onClick={finishPayment}
              />
            </S.FormContainer>
          </form>

          <Button
            placeholder="Voltar para a edição de endereço"
            displayMode="fullWidth"
            themeMode="second"
            kind="button"
            onClick={handleClick}
          />
        </>
      ) : (
        <>
          <S.SubTitle>Pedido realizado - {`{ORDER_ID}`}</S.SubTitle>
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
      )}
    </S.Sidebar>
  )
}

export default Payment

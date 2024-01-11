import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { close, clear } from '../../../store/reducers/cart'

import Button from '../../../components/Button'

import * as S from '../styles'

type PaymentProps = {
  handleClick: () => void
}

const Payment = ({ handleClick }: PaymentProps) => {
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false)
  const dispatch = useDispatch()

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
          <S.FormContainer>
            <S.InputGroup>
              <label htmlFor="fullName">Nome no cartão</label>
              <input type="text" id="fullName" name="fullName" />
            </S.InputGroup>
            <S.InputContainer>
              <S.InputGroup>
                <label htmlFor="zip-code">Número do cartão</label>
                <input type="text" id="zip-code" name="zip-code" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="number">CVV</label>
                <input type="text" id="number" name="number" />
              </S.InputGroup>
            </S.InputContainer>
            <S.InputContainer>
              <S.InputGroup>
                <label htmlFor="zip-code">Mês de vencimento</label>
                <input type="text" id="zip-code" name="zip-code" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="number">Ano de vencimento</label>
                <input type="text" id="number" name="number" />
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

import { useState } from 'react'
import Payment from '../Payment'
import Button from '../../../components/Button'
import * as S from '../styles'

type DeliveryProps = {
  handleClick: () => void
}

const Delivery = ({ handleClick }: DeliveryProps) => {
  const [finalizePayment, setFinalizePayment] = useState(false)

  return (
    <>
      {!finalizePayment ? (
        <S.Sidebar>
          <S.SubTitle>Entrega</S.SubTitle>
          <S.FormContainer>
            <S.InputGroup>
              <label htmlFor="fullName">Quem irá receber</label>
              <input type="text" id="fullName" name="fullName" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="address">Endereço</label>
              <input type="text" id="address" name="address" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="city">Cidade</label>
              <input type="text" id="city" name="city" />
            </S.InputGroup>
            <S.InputContainer>
              <S.InputGroup>
                <label htmlFor="zip-code">CEP</label>
                <input type="text" id="zip-code" name="zip-code" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="number">Número</label>
                <input type="text" id="number" name="number" />
              </S.InputGroup>
            </S.InputContainer>
            <S.InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input type="text" id="complement" name="complement" />
            </S.InputGroup>
            <Button
              placeholder="Continuar com o pagamento"
              displayMode="fullWidth"
              themeMode="second"
              kind="button"
              onClick={() => setFinalizePayment(true)}
            />
          </S.FormContainer>

          <Button
            placeholder="Voltar para o carrinho"
            displayMode="fullWidth"
            themeMode="second"
            kind="button"
            onClick={handleClick}
          />
        </S.Sidebar>
      ) : (
        <Payment handleClick={() => setFinalizePayment(false)} />
      )}
    </>
  )
}

export default Delivery

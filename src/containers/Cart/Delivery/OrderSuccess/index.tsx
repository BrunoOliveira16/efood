import Button from '../../../../components/Button'
import * as S from '../../styles'

type OrderSuccessProps = {
  orderId: number | string
  handleClick: () => void
}

function OrderSuccess({ orderId, handleClick }: OrderSuccessProps) {
  return (
    <div>
      <S.SubTitle>Pedido realizado - {orderId}</S.SubTitle>

      <S.TextContainer>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
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
        onClick={handleClick}
      />
    </div>
  )
}

export default OrderSuccess

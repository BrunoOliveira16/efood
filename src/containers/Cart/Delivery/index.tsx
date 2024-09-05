import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { RootReducer } from '../../../store'
import { close, clear } from '../../../store/reducers/cart'
import { usePurchaseMutation } from '../../../services/api'
import { formatPrice, getTotalPrice } from '../../../utils/index'

import OrderForm from './OrderForm'
import OrderSuccess from './OrderSuccess'
import Button from '../../../components/Button'

import * as S from '../styles'

type DeliveryProps = {
  handleClick: () => void
}

const Delivery = ({ handleClick }: DeliveryProps) => {
  const [nextStep, setNextStep] = useState(false)
  const [showOrderSuccess, setShowOrderSuccess] = useState(false)

  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const TotalPrice = getTotalPrice(items)

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  function closeCart() {
    dispatch(close())
    setShowOrderSuccess(false)
    window.location.href = '/'
  }

  function handleSubmitOrder(item: DeliveryDataProps) {
    const mountObject: PurchasePayloadProps = {
      products: items.map((item) => ({
        id: item.id,
        price: item.preco
      })),
      delivery: {
        receiver: item.receiver,
        address: {
          description: item.address.description,
          city: item.address.city,
          zipCode: item.address.zipCode,
          number: item.address.number,
          complement: item.address.complement
        }
      },
      payment: {
        card: {
          name: item.payment.name,
          number: item.payment.cardNumber,
          code: item.payment.code,
          expires: {
            month: item.payment.expires.month,
            year: item.payment.expires.year
          }
        }
      }
    }

    purchase(mountObject)
    setShowOrderSuccess(true)
  }

  function renderFormSubTitle() {
    if (nextStep) {
      return (
        <S.SubTitle>
          Pagamento - Valor a pagar ${formatPrice(TotalPrice)}
        </S.SubTitle>
      )
    }

    return <S.SubTitle>Entrega</S.SubTitle>
  }

  function renderBackButtons() {
    if (nextStep) {
      return (
        <Button
          placeholder="Voltar para a edição de endereço"
          displayMode="fullWidth"
          themeMode="second"
          kind="button"
          onClick={() => setNextStep(false)}
        />
      )
    }

    return (
      <>
        <Button
          placeholder="Continuar com o pagamento"
          displayMode="fullWidth"
          themeMode="second"
          kind="button"
          onClick={() => setNextStep(true)}
        />

        <Button
          placeholder="Voltar para o carrinho"
          displayMode="fullWidth"
          themeMode="second"
          kind="button"
          onClick={handleClick}
        />
      </>
    )
  }

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <S.Sidebar>
      {showOrderSuccess && data ? (
        <OrderSuccess orderId={data.orderId} handleClick={closeCart} />
      ) : (
        <>
          {renderFormSubTitle()}

          <OrderForm
            showNextForm={nextStep}
            handleClick={(item) => handleSubmitOrder(item)}
          />

          {renderBackButtons()}
        </>
      )}
    </S.Sidebar>
  )
}

export default Delivery

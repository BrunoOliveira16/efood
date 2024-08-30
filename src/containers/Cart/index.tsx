import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

import Products from './Products'
import Delivery from './Delivery'

import * as S from './styles'

const Cart = () => {
  const [showProduct, setShowProduct] = useState(true)
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  function closeCart() {
    dispatch(close())
    setShowProduct(true)
  }

  return (
    <S.CartContainer $isOpen={isOpen}>
      <S.Overlay onClick={closeCart} />
      {showProduct ? (
        <Products handleClick={() => setShowProduct(false)} />
      ) : (
        <Delivery handleClick={() => setShowProduct(true)} />
      )}
    </S.CartContainer>
  )
}

export default Cart

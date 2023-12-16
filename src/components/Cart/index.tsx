import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { MenuDataProps } from '../../containers/CardListHome'
import { formatPrice } from '../../utils'

import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Price,
  Sidebar,
  Text,
  Title,
  TotalContainer
} from './styles'
import { PiTrash } from 'react-icons/pi'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  function closeCart() {
    dispatch(close())
  }

  function handleRemoveItem(id: number) {
    dispatch(remove(id))
  }

  function getTotalPrice() {
    return items.reduce((prevValue, currentvalue) => {
      return (prevValue += currentvalue.preco!)
    }, 0)
  }

  function RenderCartItem(products: MenuDataProps[]) {
    return products.map((product) => (
      <CartItem key={product.id}>
        <img src={product.foto} alt={product.nome} />
        <div>
          <Title>{product.nome}</Title>
          <Price>{formatPrice(product.preco)}</Price>
        </div>
        <PiTrash fill="#E66767" onClick={() => handleRemoveItem(product.id)} />
      </CartItem>
    ))
  }

  return (
    <CartContainer isOpen={isOpen}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {RenderCartItem(items)}
        <TotalContainer>
          <Text>Valor total</Text>
          <Text>{formatPrice(getTotalPrice())}</Text>
        </TotalContainer>

        <Button
          placeholder="Continuar com a entrega"
          displayMode="fullWidth"
          themeMode="second"
          kind="button"
        />
      </Sidebar>
    </CartContainer>
  )
}

export default Cart

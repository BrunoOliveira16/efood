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
import Pizza from '../../assets/pizza-img.png'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <CartItem>
          <img src={Pizza} alt="item" />
          <div>
            <Title>Pizza Marguerita</Title>
            <Price>R$ 60,90</Price>
          </div>
          <PiTrash fill="#E66767" />
        </CartItem>
        <CartItem>
          <img src={Pizza} alt="item" />
          <div>
            <Title>Pizza Marguerita</Title>
            <Price>R$ 60,90</Price>
          </div>
          <PiTrash fill="#E66767" />
        </CartItem>
        <CartItem>
          <img src={Pizza} alt="item" />
          <div>
            <Title>Pizza Marguerita</Title>
            <Price>R$ 60,90</Price>
          </div>
          <PiTrash fill="#E66767" />
        </CartItem>

        <TotalContainer>
          <Text>Valor total</Text>
          <Text>R$ 182,70</Text>
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

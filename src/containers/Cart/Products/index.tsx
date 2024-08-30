import { useDispatch, useSelector } from 'react-redux'
import { PiTrash } from 'react-icons/pi'

import { remove } from '../../../store/reducers/cart'
import { RootReducer } from '../../../store'
import { formatPrice, getTotalPrice } from '../../../utils'
import Button from '../../../components/Button'

import * as S from '../styles'

type ProductsProps = {
  handleClick: () => void
}

const Products = ({ handleClick }: ProductsProps) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const totalPrice = getTotalPrice(items)

  function handleRemoveItem(id: number) {
    dispatch(remove(id))
  }

  function RenderCartItem(products: MenuDataProps[]) {
    return products.map((product) => (
      <S.CartItem key={product.id}>
        <img src={product.foto} alt={product.nome} />

        <div>
          <S.Title>{product.nome}</S.Title>
          <S.Price>{formatPrice(product.preco)}</S.Price>
        </div>

        <PiTrash fill="#E66767" onClick={() => handleRemoveItem(product.id)} />
      </S.CartItem>
    ))
  }

  return (
    <S.Sidebar>
      {items.length > 0 ? (
        <>
          {RenderCartItem(items)}

          <S.TotalContainer>
            <S.Text>Valor total</S.Text>
            <S.Text>{formatPrice(totalPrice)}</S.Text>
          </S.TotalContainer>

          <Button
            placeholder="Continuar com a entrega"
            displayMode="fullWidth"
            themeMode="second"
            kind="button"
            onClick={handleClick}
          />
        </>
      ) : (
        <S.Text style={{ textAlign: 'center' }}>
          O carrinho está vazio, adicione pelo menos um produto para prosseguir
          com o pedido.
        </S.Text>
      )}
    </S.Sidebar>
  )
}

export default Products

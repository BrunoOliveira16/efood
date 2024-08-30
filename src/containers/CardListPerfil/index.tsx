import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useGetRestaurantQuery } from '../../services/api'
import { add, open } from '../../store/reducers/cart'
import { getDescriptionProduct } from '../../utils'

import Card from '../../components/Card'
import Modal from '../../components/Modal'

import { Container } from '../../global/globalStyle'
import {
  BannerContainer,
  CardListContainer,
  ContainerListPerfil,
  SubTitle,
  TextMessage,
  Title
} from './styles'

const CardListPerfil = () => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)

  const { id } = useParams()
  const { data } = useGetRestaurantQuery(id!)
  const dispatch = useDispatch()

  function handleCardClick(itemId: number) {
    setSelectedItemId(itemId)
    setShowModal(true)
  }

  function handleCloseModal() {
    setShowModal(false)
    setSelectedItemId(null)
  }

  function addItemToCart(item: MenuDataProps) {
    dispatch(add(item))
    setShowModal(false)
    dispatch(open())
  }

  function renderProductList(products: MenuDataProps[]) {
    if (!products) {
      return (
        <TextMessage>
          Não existem ainda produtos para este restaurante
        </TextMessage>
      )
    }

    return products.map((product) => (
      <Card
        key={product.id}
        card="second"
        kindButton="button"
        nameButton="Adicionar ao carrinho"
        title={product.nome}
        description={getDescriptionProduct(product.descricao)}
        cover={product.foto}
        handleClick={() => handleCardClick(product.id)}
      />
    ))
  }

  function renderModal() {
    if (!selectedItemId || !data) return null

    const selectedItem = data.cardapio.find(
      (item) => item.id === selectedItemId
    )

    if (!selectedItem) return null

    return (
      <Modal
        title={selectedItem.nome}
        description={selectedItem.descricao}
        cover={selectedItem.foto}
        potion={selectedItem.porcao}
        price={selectedItem.preco}
        openModal={showModal}
        closeModal={handleCloseModal}
        handleAddItem={() => addItemToCart(selectedItem)}
      />
    )
  }

  if (!data) return <h3>Carregando...</h3>

  return (
    <ContainerListPerfil>
      {renderModal()}

      <BannerContainer
        key={data.id}
        style={{ backgroundImage: `url(${data.capa})` }}
      >
        <Container>
          <SubTitle>{data?.tipo}</SubTitle>
          <Title>{data?.titulo}</Title>
        </Container>
      </BannerContainer>

      <Container>
        <CardListContainer key={data.id}>
          {renderProductList(data.cardapio)}
        </CardListContainer>
      </Container>
    </ContainerListPerfil>
  )
}

export default CardListPerfil

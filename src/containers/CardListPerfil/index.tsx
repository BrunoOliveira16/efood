import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'
import { MenuDataProps } from '../CardListHome'
import { getDescriptionProduct } from '../../utils'
import Card from '../../components/Card'
import Modal from '../../components/Modal'

import {
  BannerContainer,
  CardListContainer,
  ContainerListPerfil,
  SubTitle,
  TextMessage,
  Title
} from './styles'
import { Container } from '../../global/globalStyle'

type CardListPerilProps = {
  onModalOpenChange: (args: boolean) => void
}

const CardListPerfil = ({ onModalOpenChange }: CardListPerilProps) => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null)
  const [openModal, setOpenModal] = useState(false)

  const { id } = useParams()
  const { data } = useGetRestaurantQuery(id!)

  function handleCardClick(itemId: number) {
    setSelectedItemId(itemId)
    setOpenModal(!openModal)
    onModalOpenChange(!openModal)
  }

  function handleCloseModal() {
    setOpenModal(!openModal)
    setSelectedItemId(null)
    onModalOpenChange(!openModal)
  }

  function renderProductList(products: MenuDataProps[]) {
    if (!products || products.length === 0) {
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
        closeModal={handleCloseModal}
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

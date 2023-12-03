import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MenuDataProps, RestaurantsDataProps } from '../CardListHome'
import Card from '../../components/Card'

import {
  BannerContainer,
  CardListContainer,
  SubTitle,
  TextMessage,
  Title
} from './styles'
import { Container } from '../../global/globalStyle'
import { getDescription } from '../../utils'

const CardListPerfil = () => {
  const { id } = useParams()
  const [data, setData] = useState<RestaurantsDataProps>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [id])

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
        description={getDescription(product.descricao)}
        cover={product.foto}
      />
    ))
  }

  if (!data) return <h3>Carregando...</h3>

  return (
    <>
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
    </>
  )
}

export default CardListPerfil

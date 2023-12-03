import Card from '../../components/Card'
import { ListData } from '../../utils'

import {
  BannerContainer,
  CardListContainer,
  SubTitle,
  TextMessage,
  Title
} from './styles'
import { Container } from '../../global/globalStyle'

type ProductProps = {
  id: number
  title: string
  description: string
  cover: string
}

type ListDataProps = {
  id_restaurant: number
  restaurant: string
  type: string
  bannerImage: string
  products: ProductProps[]
}

const CardListPerfil = () => {
  function renderProductList(products: ProductProps[]) {
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
        title={product.title}
        description={product.description}
        cover={product.cover}
      />
    ))
  }

  return (
    <>
      {ListData.map((item: ListDataProps) => (
        <BannerContainer
          key={item.id_restaurant}
          style={{ backgroundImage: `url(${item.bannerImage})` }}
        >
          <Container>
            <SubTitle>{item.type}</SubTitle>
            <Title>{item.restaurant}</Title>
          </Container>
        </BannerContainer>
      ))}
      <Container>
        {ListData.map((item) => (
          <CardListContainer key={item.id_restaurant}>
            {renderProductList(item.products)}
          </CardListContainer>
        ))}
      </Container>
    </>
  )
}

export default CardListPerfil

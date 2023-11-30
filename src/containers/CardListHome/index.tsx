import Card from '../../components/Card'
import CoverImage from '../../assets/image-01.png'
import Star from '../../assets/icons/star.svg'
import { CardListContainer } from './styles'

const restaurants = [
  {
    id: 1,
    title: 'Hioki Sushi',
    rating: '4.9',
    tagName: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    cover: CoverImage
  },
  {
    id: 2,
    title: 'Hioki Sushi',
    rating: '4.9',
    tagName: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    cover: CoverImage
  },
  {
    id: 3,
    title: 'Hioki Sushi',
    rating: '4.9',
    tagName: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    cover: CoverImage
  },
  {
    id: 4,
    title: 'Hioki Sushi',
    rating: '4.9',
    tagName: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    cover: CoverImage
  },
  {
    id: 5,
    title: 'Hioki Sushi',
    rating: '4.9',
    tagName: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    cover: CoverImage
  },
  {
    id: 6,
    title: 'Hioki Sushi',
    rating: '4.9',
    tagName: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    cover: CoverImage
  }
]

const CardListHome = () => {
  return (
    <CardListContainer>
      {restaurants.map((item) => (
        <>
          <Card
            key={item.id}
            card="primary"
            nameButton="Saiba Mais"
            iconName={Star}
            title={item.title}
            description={item.description}
            rating={item.rating}
            tagName={item.tagName}
            cover={item.cover}
          />
        </>
      ))}
    </CardListContainer>
  )
}

export default CardListHome

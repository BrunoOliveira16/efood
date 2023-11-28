import Card from '../../components/Card'
import CoverImage from '../../assets/image-01.png'
import Star from '../../assets/icons/star.svg'
import { CardListContainer } from './styles'

const CardListHome = () => {
  return (
    <CardListContainer>
      <Card
        title="Hioki Sushi"
        rating="4.9"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
        cover={CoverImage}
        nameButton="Saiba Mais"
        tagName="Japonesa"
        iconName={Star}
      />
      <Card
        title="Hioki Sushi"
        rating="4.9"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
        cover={CoverImage}
        nameButton="Saiba Mais"
        tagName="Japonesa"
        iconName={Star}
      />
      <Card
        title="Hioki Sushi"
        rating="4.9"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
        cover={CoverImage}
        nameButton="Saiba Mais"
        tagName="Japonesa"
        iconName={Star}
      />
      <Card
        title="Hioki Sushi"
        rating="4.9"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
        cover={CoverImage}
        nameButton="Saiba Mais"
        tagName="Japonesa"
        iconName={Star}
      />
    </CardListContainer>
  )
}

export default CardListHome

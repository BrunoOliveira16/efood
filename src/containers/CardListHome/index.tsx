import Card from '../../components/Card'
import { restaurantsData } from '../../utils'

import { CardListContainer } from './styles'
import Star from '../../assets/icons/star.svg'

type RestaurantsDataProps = {
  id: number
  title: string
  rating: string
  tagName: string[]
  description: string
  cover: string
}

const CardListHome = () => {
  return (
    <CardListContainer>
      {restaurantsData.map((item: RestaurantsDataProps) => (
        <>
          <Card
            key={item.id}
            card="primary"
            kindButton="link"
            nameButton="Saiba Mais"
            to="/perfil"
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

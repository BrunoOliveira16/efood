import { useGetFeaturedRestaurantsQuery } from '../../services/api'
import { getDescription } from '../../utils'

import Card from '../../components/Card'

import Star from '../../assets/icons/star.svg'
import { CardListContainer } from './styles'

const CardListHome = () => {
  const { data } = useGetFeaturedRestaurantsQuery()

  if (!data) return <h3>Carregando...</h3>

  return (
    <CardListContainer>
      {data.map((item: RestaurantsDataProps) => (
        <div key={item.id}>
          <Card
            key={item.id}
            card="primary"
            kindButton="link"
            nameButton="Saiba Mais"
            to={`/perfil/${item.id}`}
            iconName={Star}
            title={item.titulo}
            description={getDescription(item.descricao)}
            rating={item.avaliacao}
            tagType={item.tipo}
            tagHighlight={item.destacado}
            cover={item.capa}
          />
        </div>
      ))}
    </CardListContainer>
  )
}

export default CardListHome

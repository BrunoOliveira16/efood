import { useGetFeaturedRestaurantsQuery } from '../../services/api'
import { getDescription } from '../../utils'

import Card from '../../components/Card'

import { CardListContainer } from './styles'
import Star from '../../assets/icons/star.svg'

export type MenuDataProps = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

export type RestaurantsDataProps = {
  id: number
  titulo: string
  avaliacao: string
  destacado: boolean
  tipo: string
  descricao: string
  capa: string
  cardapio: MenuDataProps[]
}

const CardListHome = () => {
  const { data } = useGetFeaturedRestaurantsQuery()

  if (!data) return <h3>Carregando...</h3>

  return (
    <CardListContainer>
      {data.map((item: RestaurantsDataProps) => (
        <>
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
        </>
      ))}
    </CardListContainer>
  )
}

export default CardListHome

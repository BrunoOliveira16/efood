import Hero from '../../components/Hero'
import { PerfilContainer } from './styles'
import CardListPerfil from '../../containers/CardListPerfil'

const Perfil = () => {
  return (
    <PerfilContainer>
      <Hero title="Restaurantes" />
      <CardListPerfil />
    </PerfilContainer>
  )
}

export default Perfil

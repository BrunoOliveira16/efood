import Hero from '../../components/Hero'
import BannerImage from '../../assets/banner-img.png'
import { BannerContainer, PerfilContainer, SubTitle, Title } from './styles'
import { Container } from '../../global/globalStyle'
import CardListPerfil from '../../containers/CardListPerfil'

const Perfil = () => {
  return (
    <PerfilContainer>
      <Hero title="Restaurantes" />
      <BannerContainer style={{ backgroundImage: `url(${BannerImage})` }}>
        <Container>
          <SubTitle>Italiana</SubTitle>
          <Title>La Dolce Vita Trattoria</Title>
        </Container>
      </BannerContainer>
      <Container>
        <CardListPerfil />
      </Container>
    </PerfilContainer>
  )
}

export default Perfil

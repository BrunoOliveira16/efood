import Hero from '../../components/Hero'
import BannerImage from '../../assets/banner-img.png'
import { BannerContainer, SubTitle, Title } from './styles'
import { Container } from '../../global/globalStyle'

const Perfil = () => {
  return (
    <>
      <Hero />
      <BannerContainer style={{ backgroundImage: `url(${BannerImage})` }}>
        <Container>
          <SubTitle>Italiana</SubTitle>
          <Title>La Dolce Vita Trattoria</Title>
        </Container>
      </BannerContainer>
    </>
  )
}

export default Perfil

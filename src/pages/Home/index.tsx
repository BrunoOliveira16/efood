import Hero from '../../components/Hero'
import CardListHome from '../../containers/CardListHome'
import { Container } from '../../global/globalStyle'
import { HomeContainer } from './styles'

const Home = () => (
  <HomeContainer>
    <Hero />
    <Container>
      <CardListHome />
    </Container>
  </HomeContainer>
)

export default Home

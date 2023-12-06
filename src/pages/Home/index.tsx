import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import CardListHome from '../../containers/CardListHome'
import { Container } from '../../global/globalStyle'
import { HomeContainer } from './styles'

const Home = () => (
  <HomeContainer>
    <Hero textContent="Viva experiências gastronômicas no conforto da sua casa" />
    <Container>
      <CardListHome />
    </Container>
    <Footer />
  </HomeContainer>
)

export default Home

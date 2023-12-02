import { Container } from '../../global/globalStyle'
import { HeroContainer, HeroHeader, Text, TextContainer, Title } from './styles'
import Logo from '../Logo'

type HeroProps = {
  title?: string
  textContent?: string
}

const Hero = ({ textContent, title }: HeroProps) => (
  <HeroContainer>
    <Container>
      <HeroHeader>
        {title && <Title>{title}</Title>}
        <Logo />
      </HeroHeader>
      {textContent && (
        <TextContainer>
          <Text>{textContent}</Text>
        </TextContainer>
      )}
    </Container>
  </HeroContainer>
)

export default Hero

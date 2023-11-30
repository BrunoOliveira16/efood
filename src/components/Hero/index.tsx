import Logo from '../Logo'
import { HeroContainer, Title, TitleContainer } from './styles'

type HeroProps = {
  title?: string
}

const Hero = ({ title }: HeroProps) => (
  <HeroContainer>
    <Logo />
    {title && (
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    )}
  </HeroContainer>
)

export default Hero

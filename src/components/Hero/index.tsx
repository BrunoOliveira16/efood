import Logo from '../Logo'

import {
  HeroContainer,
  HeroHeader,
  Text,
  TextContainer,
  Title,
  TitleLink
} from './styles'
import { Container } from '../../global/globalStyle'
import LogoImage from '../../assets/logo.png'

type HeroProps = {
  title?: string
  textContent?: string
}

const Hero = ({ textContent, title }: HeroProps) => {
  function renderHeaderContent(item: string | undefined) {
    if (item && item !== undefined) {
      return (
        <>
          <TitleLink to="/">{item}</TitleLink>
          <Logo kind="link" cover={LogoImage} title="Logo eFood" to="/" />
          <Title>0 produto(s) no carrinho</Title>
        </>
      )
    }

    return <Logo kind="link" cover={LogoImage} title="Logo eFood" to="/" />
  }

  return (
    <HeroContainer>
      <Container>
        <HeroHeader>{renderHeaderContent(title)}</HeroHeader>
        {textContent && (
          <TextContainer>
            <Text>{textContent}</Text>
          </TextContainer>
        )}
      </Container>
    </HeroContainer>
  )
}

export default Hero

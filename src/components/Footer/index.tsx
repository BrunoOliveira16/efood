import { FooterContainer, SocialIcons, Text } from './styles'
import { SocialLinks } from '../../utils/list'
import Logo from '../Logo'

const Footer = () => (
  <FooterContainer>
    <Logo />
    <SocialIcons>
      {SocialLinks.map((item) => (
        <img src={item.icon} alt={item.title} key={item.id} />
      ))}
    </SocialIcons>
    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Text>
  </FooterContainer>
)

export default Footer

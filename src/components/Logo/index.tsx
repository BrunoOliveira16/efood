import LogoImage from '../../assets/logo.png'
import { LogoContainer } from './styles'

const Logo = () => (
  <LogoContainer>
    <img src={LogoImage} alt="logo eFood" />
  </LogoContainer>
)

export default Logo

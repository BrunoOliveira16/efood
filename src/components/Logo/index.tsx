import { LogoContainer, LogoContainerLink } from './styles'

type LogoProps = {
  kind: 'image' | 'link'
  title: string
  cover: string
  to?: string
}

const Logo = ({ kind, title, cover, to }: LogoProps) => {
  if (kind === 'link') {
    return (
      <LogoContainerLink to={to as string}>
        <img src={cover} alt={title} />
      </LogoContainerLink>
    )
  }

  return (
    <LogoContainer>
      <img src={cover} alt={title} />
    </LogoContainer>
  )
}

export default Logo

import { ButtonContainer, ButtonContainerLink } from './styles'

type ButtonProps = {
  kind: 'button' | 'link'
  displayMode?: 'fullWidth' | 'inlineBlock'
  themeMode: 'primary' | 'second'
  placeholder: string
  to?: string
  type?: 'button' | 'reset' | 'submit'
  onClick?: () => void
}

const Button = ({
  kind,
  placeholder,
  displayMode = 'fullWidth',
  themeMode = 'primary',
  to,
  type = 'button',
  onClick
}: ButtonProps) => {
  if (kind === 'link') {
    return (
      <ButtonContainerLink
        displayMode={displayMode}
        themeMode={themeMode}
        to={to as string}
      >
        {placeholder}
      </ButtonContainerLink>
    )
  }

  return (
    <ButtonContainer
      onClick={onClick}
      displayMode={displayMode}
      themeMode={themeMode}
      type={type}
    >
      {placeholder}
    </ButtonContainer>
  )
}

export default Button

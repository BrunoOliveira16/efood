import { ButtonContainer, ButtonContainerLink } from './styles'

type ButtonProps = {
  kind: 'button' | 'link'
  displayMode?: 'fullWidth' | 'inlineBlock'
  themeMode: 'primary' | 'second'
  placeholder: string
  to?: string
  onClick?: () => void
}

const Button = ({
  kind,
  placeholder,
  displayMode = 'fullWidth',
  themeMode = 'primary',
  to,
  onClick
}: ButtonProps) => {
  if (kind === 'link') {
    return (
      <>
        <ButtonContainerLink
          displayMode={displayMode}
          themeMode={themeMode}
          to={to as string}
        >
          {placeholder}
        </ButtonContainerLink>
      </>
    )
  }

  return (
    <>
      <ButtonContainer
        onClick={onClick}
        displayMode={displayMode}
        themeMode={themeMode}
      >
        {placeholder}
      </ButtonContainer>
    </>
  )
}

export default Button

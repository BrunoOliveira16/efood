import { ButtonContainer } from './styles'

type ButtonProps = {
  placeholder: string
  displayMode?: 'fullWidth' | 'inlineBlock'
  themeMode: 'primary' | 'second'
  onClick?: () => void
}

const Button = ({
  placeholder,
  displayMode = 'fullWidth',
  themeMode = 'primary',
  onClick
}: ButtonProps) => {
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

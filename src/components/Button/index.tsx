import { ButtonContainer } from './styles'

type ButtonProps = {
  placeholder?: string
  onClick?: () => void
}

const Button = ({ placeholder, onClick }: ButtonProps) => {
  return (
    <>
      <ButtonContainer onClick={onClick}>{placeholder}</ButtonContainer>
    </>
  )
}

export default Button

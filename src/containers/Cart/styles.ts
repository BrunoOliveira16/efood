import styled from 'styled-components'
import theme from '../../global/theme'
import { ButtonContainer } from '../../components/Button/styles'

type InputGroupProps = {
  maxWidth?: string
}

export const CartContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 3;
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.Colors.overlayColor};
`

export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  padding: 32px 8px;
  background-color: ${theme.Colors.text};
  z-index: 3;

  ${ButtonContainer} {
    margin-top: 8px;
  }
`

export const CartItem = styled.li`
  display: flex;
  padding: 12px 8px;
  margin-bottom: 16px;
  position: relative;
  background-color: ${theme.Colors.primary};

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  svg {
    width: 16px;
    height: 16px;
    position: absolute;
    color: ${theme.Colors.text};
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${theme.Colors.text};
  margin-bottom: 16px;
`

export const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.Colors.primary};
  margin-bottom: 16px;
`

export const Price = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${theme.Colors.text};
`

export const Text = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.Colors.primary};
`

export const FormContainer = styled.div`
  margin-bottom: 8px;
`

export const ContainerButton = styled.div`
  margin-top: 24px;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${theme.Colors.primary};
    display: block;
    margin: 8px 0;
  }

  input {
    width: 100%;
    background-color: ${theme.Colors.primary};
    height: 32px;
    padding: 8px;
    border: 1px solid ${theme.Colors.primary};

    &.error {
      border: 1px solid red;
      color: red;
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  gap: 34px;
`

export const TextContainer = styled.div`
  margin: 16px 0 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${theme.Colors.primary};
  }
`

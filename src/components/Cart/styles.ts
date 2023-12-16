import styled from 'styled-components'
import theme from '../../global/theme'

type CartContainerProps = {
  isOpen: boolean
}

export const CartContainer = styled.div<CartContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isOpen === true ? 'flex' : 'none')};
  justify-content: flex-end;
  z-index: 3;
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

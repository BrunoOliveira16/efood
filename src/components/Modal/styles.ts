import styled from 'styled-components'
import theme from '../../global/theme'

export const ModalContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  justify-content: center;
  z-index: 2;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.Colors.overlayColor};
`

export const ModalContent = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  gap: 24px;
  padding: 32px;
  margin-top: 16px;
  background-color: ${theme.Colors.text};
  color: ${theme.Colors.white};
  position: fixed;
  top: 160px;
  z-index: 2;

  svg {
    width: 18px;
    height: 18px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 90%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    margin-top: 0;
    top: 60px;
  }
`

export const ContainerImage = styled.div`
  max-width: 280px;
  width: 100%;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.h2`
  font-size: ${theme.fontSizes.headingM};
  font-weight: 900;
  margin-bottom: 20px;
`

export const Text = styled.p`
  font-size: ${theme.fontSizes.bodyS};
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 18px;
`

import styled from 'styled-components'
import theme from '../../global/theme'
import { Container } from '../../global/globalStyle'

export const Fade = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${theme.Colors.overlayColor};
  z-index: 2;

  ${Container} {
    position: relative;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 32px;
  margin-top: 300px;
  background-color: ${theme.Colors.text};
  color: ${theme.Colors.white};
  position: relative;

  svg {
    width: 18px;
    height: 18px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
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
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.h2`
  font-size: ${theme.fontSizes.headingM};
  font-weight: 900;
  margin-bottom: 16px;
`

export const Text = styled.p`
  font-size: ${theme.fontSizes.bodyS};
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 18px;
`

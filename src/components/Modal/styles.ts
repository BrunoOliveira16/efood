import styled from 'styled-components'
import theme from '../../global/theme'

export const ModalContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 32px;
  background-color: ${theme.Colors.text};
  color: ${theme.Colors.white};
`

export const ContainerImage = styled.div`
  width: 280px;
  height: 280px;
  flex-shrink: 0;

  img {
    width: 100%;
    object-fir: cover;
  }
`

export const Title = styled.h2`
  font-size: ${theme.fontSizes.headingM};
  font-weight: 900;
`

export const Text = styled.p`
  font-size: ${theme.fontSizes.bodyS};
  font-weight: 400;
  line-height: 22px;
  margin-top: 16px;
`

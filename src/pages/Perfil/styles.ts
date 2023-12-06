import styled, { css } from 'styled-components'
import theme from '../../global/theme'

type PerfilContainerProps = {
  isModalOpen: boolean
}

export const PerfilContainer = styled.main<PerfilContainerProps>`
  background-color: ${theme.Colors.background};
  position: relative;

  ${({ isModalOpen }) =>
    isModalOpen &&
    css`
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${theme.Colors.overlayColor};
        z-index: 2;
      }
    `};
`

export const ContentContainer = styled.div`
  position: relative;
`

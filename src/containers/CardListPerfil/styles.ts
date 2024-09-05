import styled from 'styled-components'
import theme from '../../global/theme'
import { Container } from '../../global/globalStyle'

export const ContainerListPerfil = styled.main`
  position: relative;
`

export const BannerContainer = styled.div`
  width: 100%;
  height: 280px;
  padding: 25px 0 32px;
  display: block;
  background: no-repeat center/cover;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }

  ${Container} {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 25px 16px 32px;
  }
`

export const CardListContainer = styled.div`
  padding: 80px 0 120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 40px;

  background-color: ${theme.Colors.background};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    padding: 32px 16px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 16px;
  }
`

export const Title = styled.h1`
  color: ${theme.Colors.white};
  font-size: ${theme.fontSizes.headingL};
  font-weight: 900;
`

export const SubTitle = styled.p`
  color: ${theme.Colors.white};
  font-size: ${theme.fontSizes.headingL};
  font-weight: 100;
  opacity: 0.8;
`

export const TextMessage = styled.p`
  color: ${theme.Colors.text};
  font-size: ${theme.fontSizes.headingM};
  font-weight: 400;
`

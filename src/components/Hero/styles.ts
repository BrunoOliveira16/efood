import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../global/theme'
import { Container } from '../../global/globalStyle'

export const HeroContainer = styled.header`
  width: 100%;
  padding: 64px 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url('https://raw.githubusercontent.com/BrunoOliveira16/Curso-Engenheiro-Front-End-EBAC/main/Modulo-35/ImagesEfood/hero.png');
  background-size: cover;
  background-repeat: no-repeat;

  ${Container} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 64px 16px 40px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 32px 16px;
  }
`

export const HeroHeader = styled.div`
  color: ${theme.Colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 16px;
  }
`

export const Title = styled.h1`
  font-size: ${theme.fontSizes.headingM};
  font-weight: 900;
  cursor: pointer;
`

export const TitleLink = styled(Link)`
  color: ${theme.Colors.text};
  font-size: ${theme.fontSizes.headingM};
  text-decoration: none;
  font-weight: 900;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Text = styled.h2`
  max-width: 539px;
  color: ${theme.Colors.text};
  text-align: center;
  font-size: ${theme.fontSizes.headingXl};
  font-weight: 900;
  line-height: normal;
  margin-top: 138px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: 16px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-top: 0;
  }
`

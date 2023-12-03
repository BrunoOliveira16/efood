import styled from 'styled-components'
import theme from '../../global/theme'
import backgroundImage from '../../assets/hero.png'
import { Container } from '../../global/globalStyle'

export const HeroContainer = styled.header`
  width: 100%;
  padding: 64px 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;

  ${Container} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const HeroHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Title = styled.h1`
  color: ${theme.Colors.text};
  text-align: center;
  font-size: ${theme.fontSizes.headingM};
  font-weight: 900;
`

export const TextContainer = styled.div`
  margin: 0 auto;
`

export const Text = styled.h2`
  max-width: 539px;
  color: ${theme.Colors.text};
  text-align: center;
  font-size: ${theme.fontSizes.headingXl};
  font-weight: 900;
  line-height: normal;
  margin-top: 138px;
`

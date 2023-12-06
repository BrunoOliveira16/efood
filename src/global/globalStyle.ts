import styled, { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
`

export const Container = styled.div`
  max-width: 1024px;
  min-width: 375px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 72px;
  }
`

export default GlobalStyle

import styled from 'styled-components'
import theme from '../../global/theme'

export const CardListContainer = styled.div`
  padding: 80px 0 120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  background-color: ${theme.Colors.background};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    padding: 32px 16px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 16px;
  }
`

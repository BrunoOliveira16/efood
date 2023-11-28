import styled from 'styled-components'
import theme from '../../global/theme'

export const ButtonContainer = styled.button`
  display: inline-block;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  background-color: ${theme.Colors.text};
  color: ${theme.Colors.background};
  border: none;
`

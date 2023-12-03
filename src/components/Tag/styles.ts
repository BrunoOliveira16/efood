import styled from 'styled-components'
import theme from '../../global/theme'

export const TagContainer = styled.div`
  display: inline-block;
  margin-left: 8px;
  padding: 6px 10px;
  background-color: ${theme.Colors.text};
`

export const TagTitle = styled.h3`
  color: ${theme.Colors.background};
  text-align: center;
  font-size: 12px;
  font-weight: 700;
`

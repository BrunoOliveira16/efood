import styled from 'styled-components'
import theme from '../../global/theme'

type ButtonProps = {
  displayMode?: 'fullWidth' | 'inlineBlock'
  themeMode?: 'primary' | 'second'
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: ${(props) => (props.displayMode === 'fullWidth' ? '100%' : 'auto')};
  display: ${(props) =>
    props.displayMode === 'fullWidth' ? 'block' : 'inline-block'};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  background-color: ${(props) =>
    props.themeMode === 'primary'
      ? theme.Colors.text
      : theme.Colors.background};
  color: ${(props) =>
    props.themeMode === 'primary'
      ? theme.Colors.background
      : theme.Colors.text};
  border: none;
`

import styled from 'styled-components'
import theme from '../../global/theme'

type CardProps = {
  $card: 'primary' | 'second'
}

export const CardContainer = styled.div`
  max-width: 100%;
  display: block;
  position: relative;
`

export const ContainerTags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
`

export const CardImage = styled.div<CardProps>`
  width: 100%;
  border: 1px solid transparent;
  background-color: ${(props) =>
    props.$card === 'primary' ? '' : theme.Colors.text};
  height: ${(props) => (props.$card === 'primary' ? '300px' : '200px')};
  padding: ${(props) => (props.$card === 'primary' ? 0 : '8px 8px 0 8px')};
`

export const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CardContent = styled.div<CardProps>`
  display: block;
  padding: 8px;
  background-color: ${(props) =>
    props.$card === 'primary' ? theme.Colors.white : theme.Colors.text};
  border-right: 1px solid;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-color: ${(props) =>
    props.$card === 'primary' ? theme.Colors.text : 'transparent'};
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Title = styled.h2<CardProps>`
  color: ${(props) =>
    props.$card === 'primary' ? theme.Colors.text : theme.Colors.primary};
  font-size: 18px;
  font-weight: 700;
`

export const Text = styled.p<CardProps>`
  color: ${(props) =>
    props.$card === 'primary' ? theme.Colors.text : theme.Colors.primary};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Icon = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 8px;
`

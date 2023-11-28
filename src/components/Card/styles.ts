import styled from 'styled-components'
import theme from '../../global/theme'

export const CardContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;
`

export const CardImage = styled.div`
  width: 100%;
  height: 217px;
  border 1px solid transparent;
`

export const Cover = styled.img`
  max-width: 100%;
  width: 100%;
  object-fit: cover;
`

export const CardContent = styled.div`
  display: block;
  padding: 8px;
  background-color: ${theme.Colors.white};
  border-right: 1px solid;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-color: ${theme.Colors.text};
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Title = styled.h2`
  color: ${theme.Colors.text};
  font-size: 18px;
  font-weight: 700;
`

export const Text = styled.p`
  color: ${theme.Colors.text};
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

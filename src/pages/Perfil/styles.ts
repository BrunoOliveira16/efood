import styled from 'styled-components'
import theme from '../../global/theme'
import { Container } from '../../global/globalStyle'

export const BannerContainer = styled.div`
  width: 100%;
  height: 280px;
  padding: 25px 0 32px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
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
`

export const Title = styled.h1`
  color: ${theme.Colors.white};
  font-size: 32px;
  font-weight: 900;
`

export const SubTitle = styled.h2`
  color: ${theme.Colors.white};
  font-size: 32px;
  font-weight: 100;
`

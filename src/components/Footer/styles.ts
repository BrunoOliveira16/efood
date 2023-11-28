import styled from 'styled-components'
import theme from '../../global/theme'

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.Colors.primary};
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 8px;
  margin: 32px auto 80px;

  img {
    width: 24px;
    height: 24px;
  }
`

export const Text = styled.p`
  color: ${theme.Colors.text};
  font-size: ${theme.fontSizes.body};
  text-align: center;
  font-weight: 400;
  line-height: normal;
`

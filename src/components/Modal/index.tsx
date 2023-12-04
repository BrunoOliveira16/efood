import { ModalContainer, ContainerImage, Title, Text } from './styles'
import { Container } from '../../global/globalStyle'
import Button from '../Button'

type ModalProps = {
  title: string
  cover: string
  description: string
  potion: string
  price: number
}

const Modal = ({ cover, title, description, potion, price }: ModalProps) => {
  return (
    <Container>
      <ModalContainer>
        <ContainerImage>
          <img src={cover} alt={title} />
        </ContainerImage>
        <div>
          <Title>{title}</Title>
          <Text>{description}</Text>
          <Text>Serve: de {potion}</Text>
          <Button
            kind="button"
            displayMode="inlineBlock"
            themeMode="second"
            placeholder={`Adicionar ao carrinho - R$ ${price}`}
          />
        </div>
      </ModalContainer>
    </Container>
  )
}

export default Modal

import Button from '../Button'
import {
  ModalContainer,
  ContainerImage,
  Title,
  Text,
  Fade,
  ContainerText
} from './styles'
import { Container } from '../../global/globalStyle'
import { MdClose } from 'react-icons/md'

type ModalProps = {
  title: string
  cover: string
  description: string
  potion: string
  price: number
  closeModal: () => void
}

const Modal = ({
  cover,
  title,
  description,
  potion,
  price,
  closeModal
}: ModalProps) => {
  return (
    <Fade>
      <Container>
        <ModalContainer>
          <ContainerImage>
            <img src={cover} alt={title} />
          </ContainerImage>
          <ContainerText>
            <Title>{title}</Title>
            <Text>{description}</Text>
            <Text>Serve: de {potion}</Text>
            <Button
              kind="button"
              displayMode="inlineBlock"
              themeMode="second"
              placeholder={`Adicionar ao carrinho - R$ ${price}`}
            />
          </ContainerText>
          <MdClose onClick={closeModal} />
        </ModalContainer>
      </Container>
    </Fade>
  )
}

export default Modal

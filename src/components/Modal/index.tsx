import Button from '../Button'
import { formatPrice } from '../../utils'
import {
  ModalContainer,
  ContainerImage,
  Title,
  Text,
  ContainerText
} from './styles'
import { MdClose } from 'react-icons/md'
import { Container } from '../../global/globalStyle'

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
  function renderTextPotion(potion: string) {
    if (potion === '1 pessoa') {
      return <Text>Serve: {potion}</Text>
    }
    return <Text>Serve: de {potion}</Text>
  }

  return (
    <Container>
      <ModalContainer>
        <ContainerImage>
          <img src={cover} alt={title} />
        </ContainerImage>
        <ContainerText>
          <Title>{title}</Title>
          <Text>{description}</Text>
          {renderTextPotion(potion)}
          <Button
            kind="button"
            displayMode="inlineBlock"
            themeMode="second"
            placeholder={`Adicionar ao carrinho - ${formatPrice(price)}`}
          />
        </ContainerText>
        <MdClose onClick={closeModal} />
      </ModalContainer>
    </Container>
  )
}

export default Modal

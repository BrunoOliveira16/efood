import Button from '../Button'
import {
  Title,
  Text,
  Icon,
  CardHeader,
  CardContent,
  CardImage,
  CardContainer,
  Cover
} from './styles'

type CardProps = {
  title: string
  cover: string
  description: string
  nameButton?: string
  iconName?: string
  rating?: string
  handleClick?: () => void
}

const Card = ({
  title,
  cover,
  description,
  iconName,
  rating,
  nameButton,
  handleClick
}: CardProps) => {
  return (
    <CardContainer>
      <CardImage>
        <Cover src={cover} alt={cover} />
      </CardImage>
      <CardContent>
        <CardHeader>
          <Title>{title}</Title>
          <div>
            <Title>{rating}</Title>
            <Icon src={iconName} alt={iconName} />
          </div>
        </CardHeader>
        <Text>{description}</Text>
        <Button placeholder={nameButton} onClick={handleClick} />
      </CardContent>
    </CardContainer>
  )
}

export default Card

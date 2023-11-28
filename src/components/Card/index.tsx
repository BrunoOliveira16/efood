import Button from '../Button'
import Tag from '../Tag'
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
  tagName?: string
  handleClick?: () => void
}

const Card = ({
  title,
  cover,
  description,
  iconName,
  rating,
  nameButton,
  tagName,
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
          <CardHeader>
            <Title>{rating}</Title>
            {iconName && <Icon src={iconName} alt={iconName} />}
          </CardHeader>
        </CardHeader>
        <Text>{description}</Text>
        {nameButton && (
          <Button placeholder={nameButton} onClick={handleClick} />
        )}
      </CardContent>
      {tagName && <Tag placeholder={tagName} />}
    </CardContainer>
  )
}

export default Card

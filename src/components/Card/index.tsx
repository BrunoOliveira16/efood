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
  card: 'primary' | 'second'
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
  card = 'primary',
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
      <CardImage card={card}>
        <Cover src={cover} alt={cover} />
      </CardImage>
      <CardContent card={card}>
        <CardHeader>
          <Title card={card}>{title}</Title>
          <CardHeader>
            {rating && <Title card={card}>{rating}</Title>}
            {iconName && <Icon src={iconName} alt={iconName} />}
          </CardHeader>
        </CardHeader>
        <Text card={card}>{description}</Text>
        {nameButton && (
          <Button
            placeholder={nameButton}
            onClick={handleClick}
            displayMode={card === 'primary' ? 'inlineBlock' : 'fullWidth'}
            themeMode={card}
          />
        )}
      </CardContent>
      {tagName && <Tag placeholder={tagName} />}
    </CardContainer>
  )
}

export default Card

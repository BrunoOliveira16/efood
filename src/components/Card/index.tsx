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
  ContainerTags,
  Cover
} from './styles'

type CardProps = {
  card: 'primary' | 'second'
  kindButton: 'button' | 'link'
  title: string
  cover: string
  description: string
  nameButton: string
  iconName?: string
  rating?: string
  tagName?: string[]
  to?: string
  handleClick?: () => void
}

const Card = ({
  card = 'primary',
  kindButton = 'link',
  title,
  cover,
  description,
  iconName,
  rating,
  nameButton,
  tagName,
  to,
  handleClick
}: CardProps) => {
  function renderTypeButton(kind: string) {
    return (
      <Button
        kind={kindButton}
        placeholder={nameButton}
        onClick={kind === 'button' ? handleClick : undefined}
        to={kind === 'link' ? `${to}` : undefined}
        displayMode={card === 'primary' ? 'inlineBlock' : 'fullWidth'}
        themeMode={card}
      />
    )
  }

  function renderTags(tags: string[] | undefined) {
    if (!tags || tags.length === 0) return null

    return (
      <ContainerTags>
        {tags.map((tag, index) => (
          <Tag placeholder={tag} key={index} />
        ))}
      </ContainerTags>
    )
  }

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
        {renderTypeButton(kindButton)}
      </CardContent>
      {renderTags(tagName)}
    </CardContainer>
  )
}

export default Card

import { TagContainer, TagTitle } from './styles'

type TagProps = {
  placeholder?: string
}

const Tag = ({ placeholder }: TagProps) => {
  return (
    <TagContainer>
      <TagTitle>{placeholder}</TagTitle>
    </TagContainer>
  )
}

export default Tag

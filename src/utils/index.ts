import BannerImage from '../assets/banner-img.png'
import CoverImage from '../assets/pizza-img.png'

export function getDescription(description: string) {
  if (description.length > 250) {
    return description.slice(0, 247) + '...'
  }
  return description
}

export const ListData = [
  {
    id_restaurant: 2,
    restaurant: 'La Dolce Vita Trattoria',
    type: 'Italiana',
    bannerImage: BannerImage,
    products: [
      {
        id: 1,
        title: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        cover: CoverImage
      },
      {
        id: 2,
        title: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        cover: CoverImage
      },
      {
        id: 3,
        title: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        cover: CoverImage
      },
      {
        id: 4,
        title: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        cover: CoverImage
      },
      {
        id: 5,
        title: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        cover: CoverImage
      },
      {
        id: 6,
        title: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        cover: CoverImage
      }
    ]
  }
]

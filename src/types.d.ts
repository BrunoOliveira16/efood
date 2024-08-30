declare type MenuDataProps = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

declare type RestaurantsDataProps = {
  id: number
  titulo: string
  avaliacao: string
  destacado: boolean
  tipo: string
  descricao: string
  capa: string
  cardapio: MenuDataProps[]
}

declare type DeliveryDataProps = {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: number
    complement: string
  }
  payment: {
    name: string
    cardNumber: string
    code: string
    expires: {
      month: string
      year: string
    }
  }
}

declare type ProductProps = {
  id: number
  price: number
}

declare type PurchasePayloadProps = {
  products: ProductProps[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: string
      expires: {
        month: string
        year: string
      }
    }
  }
}

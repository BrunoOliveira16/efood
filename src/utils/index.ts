export function formatPrice(price = 0) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export function getPrices(price: number | undefined | null) {
  if (price !== null && price !== undefined) {
    return formatPrice(price)
  }

  return 0
}

export function getDescription(description: string) {
  if (description.length > 250) {
    return description.slice(0, 247) + '...'
  }
  return description
}

export function getDescriptionProduct(description: string) {
  if (description.length > 255) {
    return description.slice(0, 252) + '...'
  }
  return description
}

export const getTotalPrice = (items: MenuDataProps[]) => {
  return items.reduce((prevValue, currentValue) => {
    return (prevValue += currentValue.preco!)
  }, 0)
}

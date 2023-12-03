const url = 'https://fake-api-tau.vercel.app/api/efood/restaurantes'

export async function fetchData() {
  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch (error) {
    throw new Error('Ocorreu um erro ao processar a requisição.')
  }
}

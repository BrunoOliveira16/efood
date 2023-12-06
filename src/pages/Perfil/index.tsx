import { useState } from 'react'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import CardListPerfil from '../../containers/CardListPerfil'

import { ContentContainer, PerfilContainer } from './styles'

const Perfil = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <PerfilContainer isModalOpen={isModalOpen}>
      <Hero title="Restaurantes" />
      <ContentContainer>
        <CardListPerfil onModalOpenChange={setIsModalOpen} />
      </ContentContainer>
      <Footer />
    </PerfilContainer>
  )
}

export default Perfil
